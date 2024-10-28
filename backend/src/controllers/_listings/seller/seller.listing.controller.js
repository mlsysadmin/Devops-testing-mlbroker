'use strict'
const DayJS = require('dayjs');

const Sequelize = require('../../../config/_db/mlbrokerage.db');
const {
    FindListingType,
    CreateApproval,
    FindApprover,
    FindApprovalsByMasterId,
    FindAllListingBySeller,
    FindAllListingByStatusAndUser,
    CreateListing,
    FindListingByListingId,
    FindAllMasterListing,
    FindListingDetailsByStatus
} = require('../../../streamline/listing.datastream');
const ListingIdGeneratorHelper = require("../../../utils/_helper/ListingIdGenerator.helper");
const SuccessFormatter = require('../../../utils/_helper/SuccessFormatter.helper');
const SuccessLoggerHelper = require('../../../utils/_helper/SuccessLogger.helper');
const DataResponseHandler = require('../../../utils/_helper/DataResponseHandler.helper');
const { Op } = require('sequelize');
const { ModifyListing } = require('../../helper/listing.helper');
const { PutObject } = require('../../../services/bucket.service');

const domain = process.env.COOKIE_DOMAIN;

module.exports = {
    // DONE - LIST OF PENDING AND DENIED LISTING
    GetAllSellerListings: async (req, res, next) => {
        try {

            const seller = req.query.seller;
            const params = {
                [Op.or]: [
                    {
                        listing_status: 'PENDING',
                    },
                    {
                        listing_status: 'DENIED',
                    }
                ],
                seller
            }

            const GetListings = await Sequelize.transaction(async (transaction) => {

                const getAllListing = await FindAllListingBySeller(params, transaction);

                return getAllListing;

            })
            let listings;
            let listings_log;
            let message;

            if (GetListings.length === 0) {
                listings = DataResponseHandler(
                    GetListings,
                    "NO_LISTING_FOUND",
                    200,
                    true,
                    "SUCCESS"
                );
                listings_log = DataResponseHandler(
                    { seller, listing_count: GetListings.length },
                    "NO_LISTING_FOUND",
                    200,
                    true,
                    "SUCCESS"
                );
                message = "No listing found";
            } else {

                listings = DataResponseHandler(
                    GetListings,
                    "LISTING_RETRIEVED",
                    200,
                    true,
                    "SUCCESS"
                );

                listings_log = DataResponseHandler(
                    { seller, listing_count: GetListings.length },
                    "LISTING_RETRIEVED",
                    200,
                    true,
                    "SUCCESS"
                );
                message = "Retrieved Successfully";

            }

            const success = SuccessFormatter(listings, 200, message);

            SuccessLoggerHelper(req, listings_log);

            // const cookieOptions = {
            //     expires: new Date(Date.now() + 300000),
            //     maxAge: 300000, // 5 min
            //     path: '/',
            //     httOnly: true,
            //     secure: true,
            //     sameSite: true,
            //     domain,
            //     signed:true
            //     // expires: new Date(Date.now() + 900000)
            // }

            // res.cookie('listings', GetListings, cookieOptions)

            res.status(200).send(success);

        } catch (error) {
            next(error);
        }
    },
    // DONE
    AddPropertyListing: async (req, res, next) => {
        try {

            const upload_date_time = DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss');
            const upload_date = DayJS(new Date()).format('YYYYMMDD');

            const {
                property_details,
                unit_details,
                location,
                description,
                // upload_photos,
                amenities,
                seller,
                property_id,
                listing_type,
            } = req.body.payload;

            const {
                indoor_features, outdoor_features, feature_name, inclusion_name
            } = amenities

            const upload_photos = req.files;

            const AddListing = await Sequelize.transaction(async (transaction) => {

                const prefix_name = process.env.LISTING_PREFIX_NAME;

                const { listing_id, approval_type } = await ListingIdGeneratorHelper(prefix_name);

                const listing_status = "PENDING";

                const type = await FindListingType(listing_type, transaction);

                const UploadPhotos = await PutObject(upload_photos, listing_id, upload_date);

                const level = process.env.LISTING_APPROVAL_LEVEL;
                const current_level = 1;

                const property_listing_fields = {
                    listing_id, 
                    seller, 
                    property_id, 
                    listing_status,
                    current_level,
                    level,
                    ...description,
                    property_type: {
                        ...property_details
                    },
                    listing_type_id: type.listing_type_id,
                    unit_details: {
                        ...unit_details
                    },
                    location: {
                        ...location
                    },
                    amenities: {
                        indoor_features: indoor_features,
                        outdoor_features: outdoor_features,
                        custom_amenities: {
                            feature_name: feature_name
                        },
                        custom_inclusion: {
                            inclusion_name: inclusion_name
                        }
                    },
                    photos: {
                        photo: JSON.stringify(UploadPhotos),
                        upload_date_time
                    }

                };

                const [property_listing, created] = await CreateListing(property_listing_fields, transaction);

                const property_listing_id = property_listing.property_listing_id;

                if (created) {

                    const level = {
                        [Op.or]: [
                            {
                                level: 1
                            },
                            {
                                level: 2
                            },
                            {
                                level: 3
                            }
                        ]
                    }

                    const get_approvers = await FindApprover(level, transaction);

                    const escalations = get_approvers.map((approver, i) => {
                        return {
                            approval_type,
                            approver_id: approver.approver_id,
                            property_listing_id,
                            approval_status: "PENDING",
                            approval_date: null,
                            remarks: null
                        }
                    })

                    await CreateApproval(escalations, transaction);

                    return property_listing;
                } else {

                    throw DataResponseHandler(
                        { property_listing_id, property_id },
                        "DUPLICATE_LISTING",
                        400,
                        false,
                        "Seems like your creating an existing listing, make sure Property ID is unique."
                    );
                }

            })

            const listing = DataResponseHandler(
                AddListing,
                "LISTING_CREATED",
                201,
                true,
                "SUCCESS"
            );

            const success = SuccessFormatter(listing, 201, "New listing was added");

            SuccessLoggerHelper(req, listing);

            res.status(201).send(success);

        } catch (error) {
            next(error);
        }
    },
    // DONE
    GetAllDraftListing: async (req, res, next) => {
        try {

            const seller = req.query.seller;
            const listing_status = "DRAFT";

            const params_field = {
                listing_status,
                seller
            }

            const GetDraftListings = await Sequelize.transaction(async (transaction) => {

                const getAllListing = await FindAllListingBySeller(params_field, transaction);

                return getAllListing

            })

            let listings;
            let listings_log;
            let message;

            if (GetDraftListings.length === 0) {
                listings = DataResponseHandler(
                    GetDraftListings,
                    "NO_LISTING_FOUND",
                    200,
                    true,
                    "SUCCESS"
                );
                listings_log = DataResponseHandler(
                    { seller, listing_count: GetDraftListings.length },
                    "NO_LISTING_FOUND",
                    200,
                    true,
                    "SUCCESS"
                );
                message = "No listing found";
            } else {

                listings = DataResponseHandler(
                    GetDraftListings,
                    "LISTING_RETRIEVED",
                    200,
                    true,
                    "SUCCESS"
                );

                listings_log = DataResponseHandler(
                    { seller, listing_count: GetDraftListings.length },
                    "LISTING_RETRIEVED",
                    200,
                    true,
                    "SUCCESS"
                );
                message = "Retrieved Successfully";
            }


            const success = SuccessFormatter(listings, 200, message);

            SuccessLoggerHelper(req, listings_log);

            // const cookieOptions = {
            //     expires: new Date(Date.now() + 300000),
            //     maxAge: 300000, // 5 min
            //     path: '/',
            //     httOnly: true,
            //     secure: true,
            //     sameSite: true,
            //     domain,
            //     signed:true
            //     // expires: new Date(Date.now() + 900000)
            // }

            // res.cookie('listings', GetDraftListings, cookieOptions)

            res.status(200).send(success);

        } catch (error) {
            next(error);
        }
    },

    // DONE
    DraftPropertyListing: async (req, res, next) => {
        try {

            const upload_date = DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss');

            let {
                property_details,
                unit_details,
                location,
                description,
                upload_photos,
                amenities,
                seller,
                property_id,
                listing_type,
                listing_id,
                isEdit
            } = req.body.payload;

            const {
                indoor_features, outdoor_features, feature_name, inclusion_name
            } = amenities

            const SaveDraft = await Sequelize.transaction(async (transaction) => {

                const listing_status = "DRAFT";

                const prefix_name = process.env.LISTING_PREFIX_NAME;

                const level = Number(process.env.LISTING_APPROVAL_LEVEL);
                const current_level = 0;

                if (!isEdit && !listing_id) {
                    listing_id = await ListingIdGeneratorHelper(prefix_name);
                }

                const { listing_type_id } = await FindListingType(listing_type, transaction);

                console.log(listing_type_id);
                const property_type = {
                    ...property_details
                }
                const amenities = {
                    indoor_features: JSON.stringify(indoor_features),
                    outdoor_features: JSON.stringify(outdoor_features),
                    custom_amenities: {
                        feature_name: JSON.stringify(feature_name)
                    },
                    custom_inclusion: {
                        inclusion_name: JSON.stringify(inclusion_name)
                    }
                }
                const photos = {
                    photo: JSON.stringify(upload_photos),
                    upload_date
                }

                const update_listing_fields = {
                    listing_id,
                    property_id, 
                    listing_status,
                    current_level,
                    level,
                    ...description,
                    property_type,
                    listing_type_id,
                    unit_details: {
                        ...unit_details
                    },
                    location: {
                        ...location
                    },
                    amenities,
                    photos
                }

                const property_listing_fields = {
                    listing_id, 
                    seller, 
                    property_id, listing_status,
                    current_level,
                    level,
                    ...description,
                    property_type,
                    listing_type_id,
                    unit_details: {
                        ...unit_details
                    },
                    location: {
                        ...location
                    },
                    amenities,
                    photos

                };

                let [property_listing, created] = await CreateListing(property_listing_fields, transaction);

                const ids = {
                    listing_id,
                    property_type_id: property_listing.property_type_id,
                    unit_detail_id: property_listing.unit_detail_id,
                    location_id: property_listing.location_id,
                    custom_amenity_id: property_listing.amenities.custom_amenity_id,
                    custom_inclusion_id: property_listing.amenities.custom_inclusion_id,
                    amenity_id: property_listing.amenity_id,
                    property_photos_id: property_listing.property_photos_id,
                }

                if (!created) {

                    await ModifyListing(update_listing_fields, ids, transaction);

                    const updated_property_listing = await FindListingByListingId(listing_id, transaction);
                    property_listing = updated_property_listing;

                }

                return property_listing;

            })


            const listing = DataResponseHandler(
                SaveDraft,
                "SAVE_DRAFT",
                201,
                true,
                "SUCCESS"
            );

            const success = SuccessFormatter(listing, 201, "Draft saved");

            SuccessLoggerHelper(req, listing);

            res.status(201).send(success);

        } catch (error) {
            next(error);
        }
    },

    // DONE
    GetAllMasterListingBySeller: async (req, res, next) => {
        try {

            const {property_status, seller} = req.query.payload;

            const params_fields = {
                property_status,
                seller
            }

            const GetAllListing = await Sequelize.transaction(async (transaction) => {

                const get_all_listing = await FindAllMasterListing(params_fields, transaction);

                return get_all_listing;

            });
            let data;
            let message;

            if (GetAllListing.length === 0) {

                data = DataResponseHandler(
                    GetAllListing,
                    `NO_${property_status}_LISTING_FOUND`,
                    200,
                    true,
                    `No ${property_status} listing available.`
                );
                message = `No ${property_status} listing available.`;

            } else {

                data = DataResponseHandler(
                    GetAllListing,
                    `${property_status}_LISTING_FOUND`,
                    200,
                    true,
                    `${property_status} listing retrieved`
                );

                message = `${property_status} listing retrieved`;

            }

            const success = SuccessFormatter(data, 200, message);
    
            SuccessLoggerHelper(success, data);

            res.send(success);

        } catch (error) {
            console.log("sfs", error);
            next(error)
        }
    },

    // DONE - PENDING AND DENIED
    GetSellerListingDetailsByStatus: async (req, res, next) => {
        try {

            const {seller, listing_status} = req.query.payload;

            const GetListingDetails = await Sequelize.transaction(async (transaction) => {

                const get_listing_details = await FindListingDetailsByStatus({ seller, listing_status}, transaction);

                return get_listing_details;

            })
        
            const listings = DataResponseHandler(
                GetListingDetails,
                "LISTING_RETRIEVED",
                200,
                true,
                "SUCCESS"
            );

            const listings_log = DataResponseHandler(
                { seller, listing_status },
                "LISTING_RETRIEVED",
                200,
                true,
                "SUCCESS"
            );

            const success = SuccessFormatter(listings, 200, message);

            SuccessLoggerHelper(req, listings_log);

            // const cookieOptions = {
            //     expires: new Date(Date.now() + 300000),
            //     maxAge: 300000, // 5 min
            //     path: '/',
            //     httOnly: true,
            //     secure: true,
            //     sameSite: true,
            //     domain,
            //     signed:true
            //     // expires: new Date(Date.now() + 900000)
            // }

            // res.cookie('listings', GetListings, cookieOptions)

            res.status(200).send(success);

        } catch (error) {
            next(error);
        }
    },
}
