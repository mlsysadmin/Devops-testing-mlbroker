'use strict'

const { Op } = require('sequelize');
const Sequelize = require('../config/_db/mlbrokerage.db');
const { FeaturesLists, PropertyTypes, ListingTypes, UnitDetails, Location, CustomAmenities, CustomInclusions, Amenities, PropertyPhoto, PropertyListing, MasterPropertyList, Approvals, Approvers, User, Role, Highlight, Save } = require('../models/main.model');
const DataResponseHandler = require('../utils/_helper/DataResponseHandler.helper');
const Prefix = require('../models/Prefix');

module.exports = {
    // CREATE
    // CreatePropertyListing: async (property_fields, transaction) => {
    //     try {

    //         const {
    //             listing_id, seller, property_id, property_type_id,
    //             listing_type_id, unit_detail_id, location_id,
    //             amenity_id,
    //             property_photos_id, 
    //             title, description,
    //             listing_status
    //         } = property_fields;

    //         const add_property_listing = await PropertyListing.create(
    //             {
    //                 listing_id, seller, property_id, property_type_id,
    //                 listing_type_id, unit_detail_id, location_id,
    //                 amenity_id, title, description,
    //                 listing_status
    //             },
    //             { transaction }

    //         );

    //         return {
    //             property_listing_id: add_property_listing.property_listing_id
    //         };

    //     } catch (error) {
    //         throw error
    //     }
    // },
    CreateMasterPropertyList: async (master_property_fields, transaction) => {
        try {

            const {
                property_listing_id, seller, property_id,
                listing_status, property_status
            } = master_property_fields;

            const add_masterproperty_listing = await MasterPropertyList.create(
                {
                    property_listing_id, seller, property_id,
                    listing_status, property_status
                },
                { transaction }

            );

            return add_masterproperty_listing;

        } catch (error) {
            throw error
        }
    },
    CreateApproval: async (approvals, transaction) => {
        try {

            const add_approval = await Approvals.bulkCreate(
                approvals,
                { transaction }

            );

            console.log("add_approval", add_approval);

            return add_approval;

        } catch (error) {
            throw error
        }
    },
    CreateListing: async (property_fields, transaction) => {
        try {

            const {
                listing_id,
                property_id,
                seller,
                title,
                description,
                listing_status,
                current_level,
                level,
                property_type,
                listing_type_id,
                unit_details,
                location,
                amenities,
                photos
            } = property_fields;

            const add_property_listing = await PropertyListing.findOrCreate(
                {
                    where: {
                        listing_id
                    },
                    defaults: {
                        listing_id,
                        property_id,
                        seller,
                        property_type: {
                            type: property_type.type,
                            subtype: property_type.subtype
                        },
                        listing_type_id,
                        current_level,
                        level,
                        unit_details: {
                            price: unit_details.price,
                            discounted_price: unit_details.discounted_price,
                            price_per_sqm: unit_details.price_per_sqm,
                            furnishing: unit_details.furnishing,
                            classification: unit_details.classification,
                            no_of_beds: unit_details.no_of_beds,
                            no_of_bathrooms: unit_details.no_of_bathrooms,
                            no_of_floors: unit_details.no_of_floors,
                            parking: unit_details.parking,
                            floor_area: unit_details.floor_area,
                            lot_area: unit_details.lot_area
                        },
                        location: {
                            subdivision: location.subdivision,
                            city: location.city,
                            province: location.province,
                            other: location.other,
                            zipcode: location.zipcode,
                            map_location: location.map_location
                        },
                        amenities: {
                            indoor_features: amenities.indoor_features,
                            outdoor_features: amenities.outdoor_features,
                            custom_amenities: amenities.custom_amenities,
                            custom_inclusion: amenities.custom_inclusion
                        },
                        photos: {
                            photo: photos.photo,
                            upload_date: photos.upload_date
                        },
                        title,
                        description,
                        listing_status,
                    },
                    include: [
                        {
                            model: PropertyTypes,
                            as: 'property_type'
                        },
                        {
                            model: UnitDetails,
                            as: 'unit_details'
                        },
                        {
                            model: Location,
                            as: 'location'
                        },
                        {
                            model: Amenities,
                            as: 'amenities',
                            include: [
                                {
                                    model: CustomAmenities,
                                    as: 'custom_amenities'
                                },
                                {
                                    model: CustomInclusions,
                                    as: 'custom_inclusion'
                                }
                            ]
                        },
                        {
                            model: PropertyPhoto,
                            as: 'photos'
                        }

                    ],
                    transaction
                },

            );

            return add_property_listing;

        } catch (error) {
            const isInclude = Object.keys(error).includes('original') && Object.keys(error).includes('errors');
            console.log((isInclude) && error.original.code == "ER_DUP_ENTRY" && error.errors[0].path == "property_id");

            if ((isInclude) && error.original.code == "ER_DUP_ENTRY" && error.errors[0].path == "property_id") {
                throw DataResponseHandler(
                    error,
                    "DUPLICATE_PROPERTY_ID",
                    400,
                    false,
                    "Seems like your creating an existing listing, make sure Property ID is unique."
                );
            } else {
                throw error;
            }
        }
    },

    // FIND
    FindApprover: async (approver, transaction) => {
        try {

            const get_approver = await Approvers.findAll({
                where: {
                    ...approver
                },
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                transaction,
            })

            return get_approver

        } catch (error) {
            throw error
        }
    },
    FindOneApprover: async (approver, transaction) => {
        try {

            const get_approver = await Approvers.findOne({
                where: {
                    ...approver
                },
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                transaction,
            })

            if (!get_approver) {
                throw DataResponseHandler(
                    get_approver,
                    "APPROVER_NOT_FOUND",
                    404,
                    false,
                    "Approver not found"
                );
            } else {

                return get_approver
            }

        } catch (error) {
            throw error
        }
    },

    // PROPERTY LISTINGS BY SELLER - (DENIED, PENDING, DRAFTS)
    FindAllListingBySeller: async (field_params, transaction) => {
        try {

            const get_all_listing_byseller = await PropertyListing.findAll({
                where: { ...field_params },
                attributes: [
                    'createdAt',
                    'listing_id',
                    'title',
                    'property_id',
                    'listing_status'
                ],
                include: [
                    {
                        model: PropertyTypes, attributes: ["type"],
                        as: 'property_type'
                    },
                    {
                        model: ListingTypes, attributes: ['listing_type'],
                    },
                    {
                        model: UnitDetails, attributes: [
                            'floor_area',
                            'price'
                        ],
                        as: 'unit_details'
                    },
                    {
                        model: Location, attributes: {
                            exclude: ["location_id"]
                        },
                        as: 'location'
                    },

                ],
                transaction,
            })

            return get_all_listing_byseller

        } catch (error) {
            throw error
        }
    },

    FindAllFeaturesLists: async () => {
        try {

            return await Sequelize.transaction(async (transaction) => {

                const findFeaturesLists = await FeaturesLists.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt', 'feature_list_id', 'deletedAt'] },
                    transaction
                });

                return findFeaturesLists;

            })

        } catch (error) {
            throw error
        }
    },
    FindListingType: async (listing_type, transaction) => {
        try {

            console.log(listing_type);

            const find_type_id = await ListingTypes.findOne({
                where: { listing_type },
                attributes: ['listing_type_id'],
                transaction
            });

            return find_type_id

        } catch (error) {
            throw error
        }
    },
    FindApprovalsPropertyListingId: async (property_listing_id, transaction) => {
        try {

            const get_approvals = await Approvals.findAll({
                where: {
                    property_listing_id
                },
                transaction,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'deletedAt']
                },
                include: [
                    {
                        model: Approvers,
                        as: 'approver',
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', 'deletedAt']
                        }
                    }
                ]
            });

            return get_approvals

        } catch (error) {
            throw error
        }
    },
    FindPrefix: async (prefix_name, transaction) => {
        try {

            const get_prefix = await Prefix.findOne({
                where: {
                    prefix_type_name: prefix_name
                },
                attributes: ['prefix', 'prefix_type_name'],
                transaction
            });

            return get_prefix;

        } catch (error) {
            throw error
        }
    },
    // PROPERTY LISTINGS
    FindListingByListingId: async (listing_id, transaction) => {
        try {

            const get_listing_by_id = await PropertyListing.findOne({
                attributes: { exclude: ['updatedAt', 'deletedAt'] },
                where: {
                    listing_id
                },
                include: [
                    {
                        model: PropertyTypes, as: 'property_type'
                    },
                    {
                        model: ListingTypes, attributes: ['listing_type'],
                        as: 'listing_type'
                    },
                    {
                        model: UnitDetails, attributes:
                        {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        as: 'unit_details'
                    },
                    {
                        model: Location,
                        as: 'location'
                    },
                    {
                        model: Amenities, attributes:
                        {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        include: [
                            {
                                model: CustomAmenities, attributes:
                                {
                                    exclude: ['createdAt', 'updatedAt', "deletedAt"]
                                },
                                as: 'custom_amenities'
                            },
                            {
                                model: CustomInclusions, attributes:
                                {
                                    exclude: ['createdAt', 'updatedAt', "deletedAt"]
                                },
                                as: 'custom_inclusion'
                            }
                        ],
                        as: 'amenities'
                    },
                    {
                        model: PropertyPhoto,
                        as: 'photos'
                    },
                ],
                transaction,
            });

            if (!get_listing_by_id) {
                throw DataResponseHandler(
                    get_listing_by_id,
                    "LISTING_NOT_FOUND",
                    404,
                    false,
                    "Listing not found"
                );
            } else {

                console.log("PROPERTY: ", get_listing_by_id);
                return get_listing_by_id;
            }

        } catch (error) {
            throw error
        }
    },
    FindForApprovalByListingId: async (listing_id, transaction) => {
        try {

            const get_listing_by_id = await PropertyListing.findOne({
                attributes: [
                    'property_listing_id',
                    'listing_status',
                    'level',
                    'current_level',
                    'seller',
                    'property_id'
                ],
                where: {
                    listing_id
                },
                transaction,
            });

            if (!get_listing_by_id) {
                throw DataResponseHandler(
                    get_listing_by_id,
                    "LISTING_NOT_FOUND",
                    404,
                    false,
                    "Listing not found"
                );
            } else {

                return get_listing_by_id;
            }

        } catch (error) {
            throw error
        }
    },

    // PROPERTY LISTINGS DETAILS W/O APPROVER
    FindListingDetailsByStatus: async (params_field, transaction) => {
        try {

            const get_listing_details_bystatus = await PropertyListing.findOne({
                where: { ...params_field },
                attributes: { exclude: ['updatedAt', 'deletedAt'] },
                include: [
                    {
                        model: PropertyTypes, attributes: {
                            exclude: ["property_type_id"]
                        },
                        as: 'property_type'
                    },
                    {
                        model: ListingTypes, attributes: ['listing_type']
                    },
                    {
                        model: UnitDetails, attributes:
                        {
                            exclude: ['createdAt', 'updatedAt', 'unit_detail_id']
                        },
                        as: 'unit_details'
                    },
                    {
                        model: Location, attributes: {
                            exclude: ["location_id"]
                        },
                        as: 'location'
                    },
                    {
                        model: Amenities, attributes:
                        {
                            exclude: ['createdAt', 'updatedAt', 'amenity_id', "custom_amenity_id", "custom_inclusion_id"]
                        },
                        include: [
                            {
                                model: CustomAmenities, attributes:
                                {
                                    exclude: ['createdAt', 'updatedAt', "deletedAt", "custom_amenity_id"]
                                },
                                as: 'custom_amenities'
                            },
                            {
                                model: CustomInclusions, attributes:
                                {
                                    exclude: ['createdAt', 'updatedAt', "deletedAt", "custom_inclusion_id"]
                                },
                                as: 'custom_inclusion'
                            }
                        ],
                        as: 'amenities'
                    }
                ],
                transaction,
            })

            if (!get_listing_details_bystatus) {
                throw DataResponseHandler(
                    get_listing_details_bystatus,
                    "LISTING_NOT_FOUND",
                    404,
                    false,
                    "Listing not found"
                );
            } else {

                return get_listing_details_bystatus
            }

        } catch (error) {
            throw error
        }
    },

    // ALL PROPERTY LISTINGS BY STATUS
    FindAllPropertyListingByStatus: async (params_field, transaction) => {
        try {

            const get_listing_bystatus = await PropertyListing.findAll({
                where: { ...params_field },
                attributes: [
                    'createdAt',
                    'listing_id',
                    'title',
                    'property_id',
                    'listing_status'
                ],
                include: [
                    {
                        model: PropertyTypes, attributes: ["type"],
                        as: 'property_type'
                    },
                    {
                        model: ListingTypes, attributes: ['listing_type'],
                    },
                    {
                        model: UnitDetails, attributes: [
                            'floor_area',
                            'price'
                        ],
                        as: 'unit_details'
                    },
                    {
                        model: Location, attributes: {
                            exclude: ["location_id"]
                        },
                        as: 'location'
                    },

                ],
                transaction,
            })

            return get_listing_bystatus

        } catch (error) {
            throw error
        }
    },

    FindAllListingForApprovalByApprover: async (fields, transaction) => {
        try {
            console.log(fields);
            const get_all_listing = await Approvals.findAll({
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt',
                        'deletedAt',
                        'application_id',
                        'approval_date',
                        'remarks'
                    ]
                },
                include: [
                    {
                        model: Approvers,
                        as: 'approver',
                        where: {
                            email: fields.approver_email
                        },
                        attributes: []
                    },
                    {
                        model: PropertyListing,
                        as: 'listing',
                        where: {
                            listing_status: fields.listing_status,
                            current_level: fields.approver_level
                        },
                        attributes: [
                            'createdAt',
                            'listing_id',
                            'title',
                            'property_id',
                            'listing_type_id',
                            'listing_status'
                        ],
                        include: [
                            {
                                model: PropertyTypes, attributes: ["type"],
                                as: 'property_type'
                            },
                            {
                                model: ListingTypes, attributes: ['listing_type'],
                            },
                            {
                                model: UnitDetails, attributes: [
                                    'floor_area',
                                    'price'
                                ],
                                as: 'unit_details'
                            },
                            {
                                model: Location, attributes: {
                                    exclude: ["location_id"]
                                },
                                as: 'location'
                            },

                        ],
                    }
                ],
                where: {
                    approval_status: fields.approval_status
                },
                transaction
            });

            return get_all_listing;

        } catch (error) {
            throw error;
        }
    },

    // MASTER LISTS
    FindAllMasterListing: async (fields_params, transaction) => {
        try {

            const get_all_listing = await MasterPropertyList.findAll({
                attributes: ['property_status', 'master_property_id'],
                include: [
                    {
                        model: PropertyListing,
                        as: 'listings',
                        attributes: [
                            'createdAt',
                            'listing_id',
                            'title',
                            'property_id',
                        ],
                        include: [
                            {
                                model: PropertyTypes, attributes: ["type"],
                                as: 'property_type'
                            },
                            {
                                model: ListingTypes, attributes: ['listing_type'],
                            },
                            {
                                model: UnitDetails, attributes: [
                                    'floor_area',
                                    'price'
                                ],
                                as: 'unit_details'
                            },
                            {
                                model: Location, attributes: {
                                    exclude: ["location_id"]
                                },
                                as: 'location'
                            },

                        ],
                    },
                ],
                where: {
                    ...fields_params
                },
                transaction
            });

            return get_all_listing;

        } catch (error) {
            throw error;
        }
    },
    FindMasterListingDetailsById: async (fields_params, transaction) => {
        try {

            const get_listing_by_id = await MasterPropertyList.findOne({
                attributes: {
                    exclude: [
                        'updatedAt', 'deletedAt', 'property_id', 'listing_status'
                    ]
                },
                where: {
                    property_status: fields_params.property_status,
                    listing_status: fields_params.listing_status
                },
                include: [
                    {
                        model: PropertyListing,
                        as: 'listings',
                        where: {
                            listing_id: fields_params.listing_id,
                        },
                        attributes:
                        {
                            exclude: ['createdAt', 'updatedAt', 'property_listing_id'],
                        },
                        include: [
                            {
                                model: PropertyTypes, as: 'property_type',
                                attributes:
                                {
                                    exclude: ['property_type_id'],
                                },
                            },
                            {
                                model: ListingTypes, attributes: ['listing_type']
                            },
                            {
                                model: UnitDetails, attributes:
                                {
                                    exclude: ['createdAt', 'updatedAt']
                                },
                                as: 'unit_details',
                                attributes:
                                {
                                    exclude: ['unit_detail_id'],
                                },
                            },
                            {
                                model: Location,
                                as: 'location',
                                attributes:
                                {
                                    exclude: ['location_id'],
                                },
                            },
                            {
                                model: Amenities, attributes:
                                {
                                    exclude: ['createdAt', 'updatedAt', 'amenity_id']
                                },
                                include: [
                                    {
                                        model: CustomAmenities, attributes:
                                        {
                                            exclude: ['createdAt', 'updatedAt', "deletedAt", "custom_amenity_id"]
                                        },
                                        as: 'custom_amenities'
                                    },
                                    {
                                        model: CustomInclusions, attributes:
                                        {
                                            exclude: ['createdAt', 'updatedAt', "deletedAt", "custom_inclusion_id"]
                                        },
                                        as: 'custom_inclusion'
                                    }
                                ],
                                as: 'amenities'
                            },
                            {
                                model: PropertyPhoto,
                                as: 'photos',
                                attributes:
                                {
                                    exclude: ['upload_date', 'property_photos_id']
                                },
                            },
                        ]
                    }
                ],
                transaction,
            })

            if (!get_listing_by_id) {
                throw DataResponseHandler(
                    get_listing_by_id,
                    "LISTING_NOT_FOUND",
                    404,
                    false,
                    "Listing not found"
                );
            } else {

                return get_listing_by_id;
            }

        } catch (error) {
            throw error
        }
    },
    FindAllHighlighted: async (fields_params, transaction) => {
        try {

            const get_all_highlighted = await Highlight.findAll({
                attributes: {
                    exclude: [
                        'updatedAt',
                    ]
                },
                where: {
                    ...fields_params
                },
                
                transaction,
            })

            return get_all_highlighted;

        } catch (error) {
            throw error
        }
    },
    FindAllSaved: async (fields_params, transaction) => {
        try {

            const get_all_saves = await Save.findAll({
                attributes: {
                    exclude: [
                        'updatedAt', 'deletedAt'
                    ]
                },
                where: {
                    ...fields_params
                },
                
                transaction,
            })

            return get_all_saves;

        } catch (error) {
            throw error
        }
    },
    


    // PUBLIC
    FindAllMasterListingPublic: async (transaction) => {
        try {

            const get_all_listing = await MasterPropertyList.findAll({
                attributes: ['property_status', 'isFeatured'],
                where: {
                    property_status: 'ACTIVE'
                },
                include: [
                    {
                        model: PropertyListing,
                        as: 'listings',
                        attributes: [
                            'listing_id',
                            'title',
                        ],
                        include: [
                            {
                                model: PropertyTypes, attributes: ["subtype"],
                                as: 'property_type'
                            },
                            {
                                model: ListingTypes, attributes: ['listing_type'],
                                // where: {
                                //     [Op.or] : [
                                //         {
                                //             listing_type: "For Rent"
                                //         },
                                //         {
                                //             listing_type: "For Sale"
                                //         }
                                //     ] 
                                // }
                            },
                            {
                                model: UnitDetails, attributes: [
                                    'price',
                                    'no_of_beds',
                                    'lot_area',
                                    'no_of_bathrooms'
                                ],
                                as: 'unit_details'
                            },
                            {
                                model: PropertyPhoto,
                                as: 'photos',
                                attributes:
                                {
                                    exclude: ['upload_date', 'property_photos_id']
                                },
                            },
                        ],
                    },
                ],
                transaction
            });

            return get_all_listing;

        } catch (error) {
            console.log("safdgfdhg");
            throw error;
        }
    },

    // UPDATE
    UpdatePropertyType: async (property, transaction) => {
        try {
            const { type, subtype, property_type_id } = property;

            const add_type = await PropertyTypes.update(
                { type, subtype },
                {
                    where: {
                        property_type_id
                    },
                    transaction
                }
            );

            return {
                property_type_id: add_type.property_type_id
            }

        } catch (error) {
            throw error
        }
    },
    UpdateUnitDetails: async (unit_details, transaction) => {
        try {

            const {
                price, discounted_price, price_per_sqm, furnishing,
                classification, no_of_beds, no_of_bathrooms, no_of_floors,
                parking, floor_area, lot_area, unit_detail_id
            } = unit_details

            const add_unit_details = await UnitDetails.update(
                {
                    price, discounted_price, price_per_sqm, furnishing,
                    classification, no_of_beds, no_of_bathrooms, no_of_floors,
                    parking, floor_area, lot_area
                },
                {
                    where: {
                        unit_detail_id
                    },
                    transaction
                },

            );

            return {
                unit_detail_id: add_unit_details.unit_detail_id
            }

        } catch (error) {
            throw error
        }
    },
    UpdateLocation: async (location, transaction) => {
        try {

            const {
                subdivision, city, province, zipcode, other,
                map_location, location_id
            } = location

            const add_location = await Location.update(
                {
                    subdivision, city, province, zipcode, other, map_location
                },
                {
                    where: {
                        location_id
                    },
                    transaction
                }

            );

            return {
                location_id: add_location.location_id
            }

        } catch (error) {
            throw error
        }
    },
    UpdateCustomAmenities: async (custom_amenities, transaction) => {
        try {

            const {
                feature_name, custom_amenity_id
            } = custom_amenities

            const add_custom_amenities = await CustomAmenities.update(
                {
                    feature_name
                },
                {
                    where: {
                        custom_amenity_id
                    },
                    transaction
                }

            );

            return {
                custom_amenity_id: add_custom_amenities.custom_amenity_id
            }

        } catch (error) {
            throw error
        }
    },
    UpdateCustomInclusions: async (custom_inclusion, transaction) => {
        try {

            const {
                inclusion_name, custom_inclusion_id
            } = custom_inclusion

            const add_custom_inclusions = await CustomInclusions.update(
                {
                    inclusion_name
                },
                {
                    where: {
                        custom_inclusion_id
                    },
                    transaction
                }

            );

            return {
                custom_inclusion_id: add_custom_inclusions.custom_inclusion_id
            }

        } catch (error) {
            throw error
        }
    },
    UpdateAmenities: async (amenities, transaction) => {
        try {

            const {
                indoor_features, outdoor_features, amenity_id
            } = amenities

            const add_amenities = await Amenities.update(
                {
                    indoor_features, outdoor_features,
                },
                {
                    where: {
                        amenity_id
                    },
                    transaction
                }

            );

            return {
                amenity_id: add_amenities.amenity_id
            }

        } catch (error) {
            throw error
        }
    },
    UpdatePhotos: async (photos, transaction) => {
        try {

            const {
                property_photos_id, photo
            } = photos;

            const update_photos = await PropertyPhoto.update(
                { photo },
                {
                    where: {
                        property_photos_id
                    },
                    transaction
                }

            );

            return {
                property_photos_id: update_photos.property_photos_id
            }

        } catch (error) {
            throw error
        }
    },
    UpdateListing: async (listing, listing_id, transaction) => {
        try {

            const update_listing = await PropertyListing.update(listing, {
                where: {
                    listing_id
                },
                transaction
            });

            return update_listing;

        } catch (error) {
            const isInclude = Object.keys(error).includes('original') && Object.keys(error).includes('errors');

            if ((isInclude) && error.original.code == "ER_DUP_ENTRY" && error.errors[0].path == "property_id") {
                throw DataResponseHandler(
                    error,
                    "DUPLICATE_PROPERTY_ID",
                    400,
                    false,
                    "Seems like your updating a listing that has an existing Property ID, make sure Property ID is unique."
                );
            } else {
                throw error;
            }
        }
    },

    UpdateApproval: async (approval, transaction) => {
        try {

            const {
                property_listing_id, approver_id, approval_status, remarks, approval_date
            } = approval

            const update_approval = await Approvals.update(
                {
                    approval_status, approval_date, remarks
                },
                {
                    where: {
                        property_listing_id, approver_id
                    },
                    transaction
                },
            );

            return update_approval;

        } catch (error) {
            throw error;
        }
    },
    UpdateApprovalLevel: async (listing_id, listing, transaction) => {
        try {

            const update_approval = await PropertyListing.update(
                {
                    ...listing
                },
                {
                    where: {
                        listing_id
                    },
                    transaction
                },
            );

            return update_approval;

        } catch (error) {
            throw error;
        }
    }
}