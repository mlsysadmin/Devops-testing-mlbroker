const { MLBROKERAGEAxiosInstance } = require("../../helper/axios");
const {
	FeaturesLists,
	PropertyTypes,
	UnitDetails,
	Location,
	CustomAmenities,
	CustomInclusions,
	Amenities,
	PropertyPhoto,
	PropertyListing,
} = require("../../../../backend/src/models/PropertyTypes");

const CreateListing =async (property_fields, transaction) => {
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
}


export {CreateListing};
