'use strict'
require('dotenv').config();
const Joi = require("joi");

const ValidationSchema = {

    LoginBody: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        api_key: Joi.string().required().equal(process.env.API_KEY).error(errors => {
            errors.forEach(err => {
                console.log(err.code);
                if (Object.keys(err).includes('path')) {
                    err.message = "api key is not allow"
                }
            });
            return errors;
        })
    }),
    RegisterBody: Joi.object().keys({
        mobile_number: Joi.string().required(),
        first_name: Joi.string().required(),
        middle_name: Joi.string().required(),
        last_name: Joi.string().required(),
        suffix: Joi.string().optional(),
        birth_date: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        user_desc: Joi.string().required(),
        license: Joi.string().optional()
    }),
    listing_id: Joi.string().required(),
    seller: Joi.string().required(),
    property_status: Joi.string()
        .custom((value, helpers) => {
            const status = ['ACTIVE', 'INACTIVE'];

            if (!status.includes(value)) {
                return helpers.message(`Invalid approval status`);
            }

            return value;
        }).required(),
    GetMasterDetailsParams: Joi.object().keys({
        listing_id: Joi.string().required(),
        property_status: Joi.string()
        .custom((value, helpers) => {
            const status = ['ACTIVE', 'INACTIVE', 'SOLD'];

            if (!status.includes(value)) {
                return helpers.message(`Invalid approval status`);
            }

            return value;
        }).required(),
    }),
    GetSellerMasterListingParams: Joi.object().keys({
        seller: Joi.string().required(),
        property_status: Joi.string()
        .custom((value, helpers) => {
            const status = ['ACTIVE', 'INACTIVE', 'SOLD'];

            if (!status.includes(value)) {
                return helpers.message(`Invalid approval status`);
            }

            return value;
        }).required(),
    }),
    searchKyc: Joi.object().keys({
        cellphoneNumber: Joi.string().required()
    }),
    ListingBody: Joi.object().keys({
        seller: Joi.string().required(),
        property_id: Joi.string().required(),
        listing_type: Joi.string().required(),
        property_details: Joi.object().keys({
            type: Joi.string().required(),
            subtype: Joi.string().required(),
        }),
        unit_details: Joi.object().keys({
            price: Joi.number().required(),
            discounted_price: Joi.number().required(),
            price_per_sqm: Joi.number().required(),
            furnishing: Joi.string().required(),
            classification: Joi.string().required(),
            no_of_beds: Joi.number().required(),
            no_of_bathrooms: Joi.number().required(),
            no_of_floors: Joi.number().required(),
            parking: Joi.number().required(),
            floor_area: Joi.number().required(),
            lot_area: Joi.number().required(),
        }),
        location: Joi.object().keys({
            subdivision: Joi.string().optional(),
            city: Joi.string().required(),
            province: Joi.string().required(),
            zipcode: Joi.number().required(),
            other: Joi.string().required(),
            map_location: Joi.string().required()
        }),
        description: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
        }),
        // upload_photos: Joi.array().required(),
        amenities: Joi.object().keys({
            indoor_features: Joi.array().required(),
            outdoor_features: Joi.array().required(),
            feature_name: Joi.array().required(),
            inclusion_name: Joi.array().required()
        }),
    }),
    DraftListingBody: Joi.object().keys({
        isEdit: Joi.boolean().required(),
        listing_id: Joi.string().allow(...[null, ""]).optional(),
        listing_status: Joi.string().allow(...[null, ""]).optional(),
        seller: Joi.string().required(),
        property_id: Joi.string().allow(...[null, ""]).optional(),
        listing_type: Joi.string().allow(...[null, ""]).optional(),
        property_details: Joi.object().keys({
            type: Joi.string().allow(...[null, ""]).optional(),
            subtype: Joi.string().allow(...[null, ""]).optional(),
        }),
        unit_details: Joi.object().keys({
            price: Joi.number().optional(),
            discounted_price: Joi.number().optional(),
            price_per_sqm: Joi.number().optional(),
            furnishing: Joi.string().allow(...[null, ""]).optional(),
            classification: Joi.string().allow(...[null, ""]).optional(),
            no_of_beds: Joi.number().optional(),
            no_of_bathrooms: Joi.number().optional(),
            no_of_floors: Joi.number().optional(),
            parking: Joi.number().optional(),
            floor_area: Joi.number().optional(),
            lot_area: Joi.number().optional(),
        }),
        location: Joi.object().keys({
            subdivision: Joi.string().allow(...[null, ""]).optional(),
            city: Joi.string().allow(...[null, ""]).optional(),
            province: Joi.string().allow(...[null, ""]).optional(),
            zipcode: Joi.number().allow(...[null]).optional(),
            other: Joi.string().allow(...[null, ""]).optional(),
            map_location: Joi.string().allow(...[null, ""]).optional()
        }),
        description: Joi.object().keys({
            title: Joi.string().allow(...[null, ""]).optional(),
            description: Joi.string().allow(...[null, ""]).optional(),
        }),
        upload_photos: Joi.array().optional(),
        // upload_date: Joi.date().optional()
        amenities: Joi.object().keys({
            indoor_features: Joi.array().optional(),
            outdoor_features: Joi.array().optional(),
            feature_name: Joi.array().optional(),
            inclusion_name: Joi.array().optional()
        }),
    }),
    EditListingBody: Joi.object().keys({
        property_id: Joi.string().required(),
        listing_type: Joi.string().required(),
        property_details: Joi.object().keys({
            type: Joi.string().required(),
            subtype: Joi.string().required(),
        }),
        unit_details: Joi.object().keys({
            price: Joi.number().required(),
            discounted_price: Joi.number().required(),
            price_per_sqm: Joi.number().required(),
            furnishing: Joi.string().required(),
            classification: Joi.string().required(),
            no_of_beds: Joi.number().required(),
            no_of_bathrooms: Joi.number().required(),
            no_of_floors: Joi.number().required(),
            parking: Joi.number().required(),
            floor_area: Joi.number().required(),
            lot_area: Joi.number().required(),
        }),
        location: Joi.object().keys({
            subdivision: Joi.string().optional(),
            city: Joi.string().required(),
            province: Joi.string().required(),
            zipcode: Joi.number().required(),
            other: Joi.string().required(),
            map_location: Joi.string().required()
        }),
        description: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
        }),
        upload_photos: Joi.array().required(),
        amenities: Joi.object().keys({
            indoor_features: Joi.array().required(),
            outdoor_features: Joi.array().required(),
            feature_name: Joi.array().required(),
            inclusion_name: Joi.array().required()
        }),
    }),
    UpdateApprovalBody: Joi.array().items({
        listing_id: Joi.string().required(),
        approval_status: Joi.string().required(),
        approver_email: Joi.string().required(),
        remarks: Joi.string().required()
    }),
    ListingByApprover: Joi.object().keys({
        approver_email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: {
                    allow: ['com']
                },
            })
            .custom((value, helpers) => {
                const domain = ['mlhuillier.com', 'gmail.com', 'student.passerellesnumeriques.org'];

                let getIndex = value.indexOf('@');
                getIndex += 1;

                let sliceEmail = value.slice(getIndex);

                console.log(getIndex, sliceEmail);
                if (!domain.includes(sliceEmail)) {
                    return helpers.message(`Email must be from [ ${domain} ] domains`);
                }

                return value;
            })
            .required(),
        listing_status: Joi.string().allow(...["PENDING", "APPROVED", "DENIED"]).required()
    })

}

module.exports = ValidationSchema;