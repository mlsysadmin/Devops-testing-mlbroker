'use strict'

const { 
    UpdatePropertyType, 
    UpdateUnitDetails, 
    UpdateLocation, 
    UpdateCustomAmenities,
    UpdateCustomInclusions,
    UpdateAmenities,
    UpdateListing,
    FindListingByListingId,
    UpdatePhotos,
} = require("../../streamline/listing.datastream");

module.exports = {
    ModifyListing: async (property_listing_fields, listing, transaction) => {
        try {
            const listing_id = listing.listing_id;

            const property_type = {
                ...property_listing_fields.property_type, 
                property_type_id: listing.property_type_id
            };
            const unit_details = {
                ...property_listing_fields.unit_details,
                unit_detail_id: listing.property_type_id
            };
            const location = {
                ...property_listing_fields.location,
                location_id: listing.location_id
            };
            const custom_amenities = {
                feature_name: property_listing_fields.amenities.custom_amenities.feature_name,
                custom_amenity_id: listing.custom_amenity_id
            };
            const custom_inclusion = {
                inclusion_name: property_listing_fields.amenities.custom_inclusion.inclusion_name,
                custom_inclusion_id: listing.custom_inclusion_id
            };
            const amenities = {
                ...property_listing_fields.amenities,
                amenity_id: listing.amenity_id
            };
            const photos = {
                ...property_listing_fields.photos,
                property_photos_id: listing.property_photos_id
            };
            
            await UpdatePropertyType(property_type, transaction);
            await UpdateUnitDetails(unit_details, transaction);
            await UpdateLocation(location, transaction);
            await UpdateCustomAmenities(custom_amenities, transaction);
            await UpdateCustomInclusions(custom_inclusion, transaction);
            await UpdateAmenities(amenities, transaction);
            await UpdatePhotos(photos, transaction);

            return await UpdateListing(property_listing_fields, listing_id, transaction);

        } catch (error) {
            throw error;
        }
    },
    DeniedListing: async () => {
        try {


            
        } catch (error) {
            throw error;
        }
    },



    AddPhotos: async (upload_photos, transaction) => {
        try {
    
            // const add_photos = upload_photos.map((photos, i) => {
            //     return {
            //         listing_id, photo: photos.photo, upload_date, property_listing_id
            //     }
            // })
    
            return await CreatePhotos(upload_photos, transaction);
    
        } catch (error) {
            throw error;
        }
    }
}