'use strict'


require('dotenv').config();
const DayJS = require('dayjs');
const { Op } = require('sequelize');

const Sequelize = require('../../../config/_db/mlbrokerage.db');
const {
    FindListingType,
    FindListingByListingId,
    FindApprovalsPropertyListingId,
    FindApprover,
    UpdateApproval,
    FindForApprovalByListingId,
    UpdateApprovalLevel,
    FindOneApprover,
    FindAllListingForApprovalByApprover,
    CreateMasterPropertyList,
    FindAllMasterListing,
    FindMasterListingDetailsById,
    FindAllPropertyListingByStatus,
    FindAllHighlighted,
    FindAllSaved,
} = require('../../../streamline/listing.datastream');
const SuccessFormatter = require('../../../utils/_helper/SuccessFormatter.helper');
const SuccessLoggerHelper = require('../../../utils/_helper/SuccessLogger.helper');
const DataResponseHandler = require('../../../utils/_helper/DataResponseHandler.helper');

const { ModifyListing, AddPhotos } = require('../../helper/listing.helper');

module.exports = {
    EditPropertyListing: async (req, res, next) => {
        try {

            const {
                property_details,
                unit_details,
                location,
                description,
                upload_photos,
                amenities,
                seller_id,
                property_id,
                listing_type,
            } = req.body.payload;

            const {
                indoor_features, outdoor_features, feature_name, inclusion_name
            } = amenities;

            const listing_id = req.query.listing_id;

            const EditListing = await Sequelize.transaction(async (transaction) => {

                const type = await FindListingType(listing_type, transaction);

                const property_listing_fields = {
                    property_id,
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
                        indoor_features: JSON.stringify(indoor_features),
                        outdoor_features: JSON.stringify(outdoor_features),
                        custom_amenities: {
                            feature_name: JSON.stringify(feature_name)
                        },
                        custom_inclusion: {
                            inclusion_name: JSON.stringify(inclusion_name)
                        }
                    },
                    photos: {
                        photo: JSON.stringify(upload_photos),
                    }

                };

                const property_listing = await FindListingByListingId(listing_id, transaction);

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

                await ModifyListing(property_listing_fields, ids, transaction);

                const updated_property_listing = await FindListingByListingId(listing_id, transaction);

                const approvals = await FindApprovalsPropertyListingId(
                    updated_property_listing.property_listing_id, transaction
                )

                return {
                    listing: updated_property_listing,
                    approvals
                };

            })

            const listing = DataResponseHandler(
                EditListing,
                "LISTING_UPDATED",
                200,
                true,
                "SUCCESS"
            );

            const success = SuccessFormatter(listing, 200, "Listing updated successfully");

            SuccessLoggerHelper(req, listing);

            res.status(200).send(success);

        } catch (error) {
            next(error);
        }
    },

    ListingApprovalEscalation: async (req, res, next) => {
        try {

            const listing_update = req.body.payload;

            const Escalation = await Sequelize.transaction(async (transaction) => {

                const bulkUpdateApproval = listing_update.map(async (update, i) => {

                    const get_listing = await FindForApprovalByListingId(update.listing_id, transaction);

                    const get_approver = await FindOneApprover({ email: update.approver_email }, transaction);

                    let current_level = get_listing.current_level;

                    if (current_level <= get_listing.level && get_listing.listing_status === 'PENDING') {

                        if (current_level === get_approver.level) {

                            const approval_date = DayJS(new Date()).format('YYYY-MM-DD HH:mm:ss');

                            const property_listing_id = get_listing.property_listing_id;

                            update.approval_status.toUpperCase();

                            const approval = {
                                property_listing_id,
                                approver_id: get_approver.approver_id,
                                approval_status: update.approval_status,
                                remarks: update.remarks,
                                approval_date
                            }

                            await UpdateApproval(approval, transaction);

                            if (current_level === get_listing.level || update.approval_status === "DENIED") {

                                const listing_fields = {
                                    current_level,
                                    listing_status: update.approval_status,
                                }

                                await UpdateApprovalLevel(update.listing_id, listing_fields, transaction);

                                if (update.approval_status === "APPROVED") {

                                    const master_fields = {
                                        property_listing_id: get_listing.property_listing_id,
                                        seller: get_listing.seller,
                                        property_id: get_listing.property_id,
                                        listing_status: update.approval_status,
                                        property_status: 'ACTIVE'
                                    }

                                    await CreateMasterPropertyList(master_fields, transaction);
                                }


                            } else {
                                current_level++;

                                const listing_fields = {
                                    current_level,
                                }

                                await UpdateApprovalLevel(update.listing_id, listing_fields, transaction);
                            }

                            const response = {
                                payload: update,
                                current_level,
                                property_listing_id,
                                listing_id: update.listing_id,
                                approval_status: update.approval_status,
                            }

                            return response;

                        }
                        else {
                            const response = {
                                payload: update,
                                current_level,
                                listing_id: update.listing_id,
                                approval_status: update.approval_status,
                                approver_level: get_approver.level
                            }

                            throw DataResponseHandler(
                                response,
                                "APPROVER_LEVEL_NOT_EQUAL_TO_CURRENT_LEVEL",
                                400,
                                false,
                                "Approver's level is not equal to the current level of listing approval."
                            )
                        }

                    } else {
                        throw DataResponseHandler(
                            req.body.payload,
                            "APPROVAL_LIMIT",
                            400,
                            false,
                            "Approval is already at the Highest level."
                        )
                    }

                });

                return await Promise.all(bulkUpdateApproval);
            });

            const response = DataResponseHandler(
                Escalation,
                "SUCCESS_APPROVAL",
                200,
                true,
                "SUCCESS"
            );

            const success = SuccessFormatter(response, 200, `Successful Approval`);

            SuccessLoggerHelper(success, response);

            res.send(success);

        } catch (error) {
            next(error);
        }
    },

    GetForApprovalListingByApprover: async (req, res, next) => {
        try {

            const payload = req.query.payload;
            const approval_status = "PENDING";

            const GetAllListing = await Sequelize.transaction(async (transaction) => {

                const approver = await FindApprover({email:payload.approver_email}, transaction);
                
                let approver_level = null;

                if (approver.length !== 0) {
                    approver.forEach((app) => {
                        if (app.email === payload.approver_email) {
                            approver_level = app.level;
                        }
                    })
                }

                const get_all_listing = await FindAllListingForApprovalByApprover({ ...payload, approval_status, approver_level }, transaction);

                return get_all_listing;

            });
            let data;
            let message;

            if (GetAllListing.length === 0) {

                data = DataResponseHandler(
                    GetAllListing,
                    "NO_LISTING_FOUND_FOR_APPROVER",
                    200,
                    true,
                    "No for approval listing available."
                );
                message = "No for approval listing available.";

            } else {

                data = DataResponseHandler(
                    GetAllListing,
                    "PENDING_LISTINGS_FOUND",
                    200,
                    true,
                    "For approval listing retrieved."
                );

                message = "For approval listing retrieved.";

            }

            const success = SuccessFormatter(data, 200, message);

            SuccessLoggerHelper(req, data);

            res.send(success);

        } catch (error) {
            next(error)
        }
    },

    // ACTIVE, INACTIVE, SOLD
    GetAllMasterListing: async (req, res, next) => {
        try {

            const property_status = req.query.property_status;

            const params_fields = {
                property_status
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

            SuccessLoggerHelper(req, data);

            res.send(success);

        } catch (error) {
            next(error)
        }
    },

    // DETAILS BY PROPERTY STATUS AND PROPERTY LISTING ID - ACTIVE, INACTIVE, SOLD
    GetMasterListingDetails: async (req, res, next) => {
        try {

            const payload = req.query.payload;

            const params_fields = {
                property_status: payload.property_status,
                listing_id: payload.listing_id,
                listing_status: "APPROVED"
            }

            const GetListing = await Sequelize.transaction(async (transaction) => {

                const get_listing = await FindMasterListingDetailsById(params_fields, transaction);

                const get_approvals = await FindApprovalsPropertyListingId(get_listing.property_listing_id, transaction);

                const approvals = get_approvals.filter((approval) => approval.approval_status === "APPROVED")

                return {
                    listing: { ...get_listing.dataValues },
                    approvals
                };

            });

            let data = DataResponseHandler(
                GetListing,
                `${payload.property_status}_LISTING_FOUND`,
                200,
                true,
                `${payload.property_status} listing retrieved`
            );

            let logger = DataResponseHandler(
                { listing_id: payload.listing_id },
                `${payload.property_status}_LISTING_FOUND`,
                200,
                true,
                `${payload.property_status} listing retrieved`
            );

            let message = `${payload.property_status} listing retrieved`;

            const success = SuccessFormatter(data, 200, message);

            SuccessLoggerHelper(req, logger);

            res.send(success);

        } catch (error) {
            next(error)
        }
    },

    // ALL DENIED PROPERTY LISTINGS
    GetAllDeniedListings: async (req, res, next) => {
        try {
            const listing_status = "DENIED";

            const params_fields = {
                listing_status
            }

            const GetListingByStatus = await Sequelize.transaction(async (transaction) => {

                const get_listing = await FindAllPropertyListingByStatus(params_fields, transaction);

                return get_listing;

            });

            let data;
            let message;
            let code;

            if (GetListingByStatus.length === 0) {

                data = DataResponseHandler(
                    GetListingByStatus,
                    `NO_${listing_status}_LISTING_FOUND`,
                    200,
                    true,
                    `No ${listing_status} listing available.`
                );
                code = `NO_${listing_status}_LISTING_FOUND`;
                message = `No ${listing_status} listing available.`;

            } else {

                data = DataResponseHandler(
                    GetListingByStatus,
                    `${listing_status}_LISTING_FOUND`,
                    200,
                    true,
                    `${listing_status} listing retrieved`
                );
                code = `${listing_status}_LISTING_FOUND`;
                message = `${listing_status} listing retrieved`;

            }

            let logger = DataResponseHandler(
                { listing_status: listing_status },
                `${listing_status}_LISTING_FOUND`,
                200,
                true,
                message
            );

            const success = SuccessFormatter(data, 200, message);

            SuccessLoggerHelper(req, logger);

            res.send(success);

        } catch (error) {
            next(error)
        }
    },

    AllSoldListingsCount: async (req, res, next) => {
        try {
            console.log('here', req.query);

            const payload = req.query.payload;
            const approval_status = "PENDING";

            const SoldProperties = await Sequelize.transaction(async (transaction) => {

                const property_listing = await FindAllMasterListing({}, transaction);

                const approver = await FindApprover({email:payload.approver_email}, transaction);
                
                let approver_level = null;

                if (approver.length !== 0) {
                    approver.forEach((app) => {
                        if (app.email === payload.approver_email) {
                            approver_level = app.level;
                        }
                    })
                }

                const get_all_listing = await FindAllListingForApprovalByApprover({ ...payload, approval_status, approver_level }, transaction);

                const sold = property_listing.filter((property) => property.property_status === "SOLD");
                const active = property_listing.filter((property) => property.property_status === "ACTIVE");

                const get_all_highlighted = await FindAllHighlighted({}, transaction);
                const get_all_saved = await FindAllSaved({}, transaction);

                return {
                    sold: sold.length,
                    active: active.length,
                    for_approval: get_all_listing.length,
                    new: active.length,
                    save: get_all_saved.length,
                    highlighted: get_all_highlighted.length,
                };

            });


            const response = DataResponseHandler(
                SoldProperties,
                "DASHBOARD_DATA_RETRIEVED",
                200,
                true,
                "Dashboard data retrieved."
            );

            const success = SuccessFormatter(response, 200, `Dashboard data retrieved`);

            SuccessLoggerHelper(req, response);

            res.send(success);

        } catch (error) {
            next(error);
        }
    },

     // DETAILS BY LISTING STATUS AND PROPERTY LISTING ID - PENDING, APPROVED, DENIED
    GetListingDetails: async (req, res, next) => {
        try {

            const listing_id = req.query.listing_id;

            const GetListing = await Sequelize.transaction(async (transaction) => {

                const get_listing = await FindListingByListingId(listing_id, transaction);

                const get_approvals = await FindApprovalsPropertyListingId(get_listing.property_listing_id, transaction);

                return {
                    listing: { ...get_listing.dataValues },
                    approvals: get_approvals
                };

            });

            let data = DataResponseHandler(
                GetListing,
                `LISTING_FOUND`,
                200,
                true,
                `Listing retrieved`
            );

            let logger = DataResponseHandler(
                { listing_id },
                `LISTING_FOUND`,
                200,
                true,
                `Listing retrieved`
            );

            let message = `Listing retrieved`;

            const success = SuccessFormatter(data, 200, message);

            SuccessLoggerHelper(req, logger);

            res.send(success);

        } catch (error) {
            next(error)
        }
    },
}