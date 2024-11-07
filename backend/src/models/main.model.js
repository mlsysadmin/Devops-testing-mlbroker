'use strict'

const Role = require('./Role');
const User = require('./User');
const PropertyListing = require('./PropertyListing');
const MasterPropertyList = require('./MasterPropertyList');
const Save = require('./Save');
const PropertyViews = require('./PropertyViews');
const SoldProperties = require('./SoldProperties');
const Amenities = require('./Amenities');
const CustomAmenities = require('./CustomAmenities');
const PropertyTypes = require('./PropertyTypes');
const ListingTypes = require('./ListingTypes');
const UnitDetails = require('./UnitDetails');
const Location = require('./Location');
const PropertyPhoto = require('./PropertyPhoto');
const Highlight = require('./HighLight');
const Approvals = require('./Approvals');
const Approvers = require('./Approvers');
const FeaturesLists = require('./FeaturesList');
const CustomInclusions = require('./CustomInclusions');
const Applications = require('./Applications');
const ApplicationCancellation = require('./ApplicationCancellation');

/** User Association **/ 
User.hasOne(Role, {
    foreignKey: "role_id"
});

Role.belongsTo(User, {
    foreignKey: 'role_id'
});

/* ------------------------------------------------------------------------------- */

/** Save Association **/ 
User.hasMany(Save, { foreignKey: 'user_id' }); // done
Save.belongsTo(User, { foreignKey: 'user_id' }); // done

MasterPropertyList.hasMany(Save, { foreignKey: 'master_property_id' }); // done
Save.belongsTo(MasterPropertyList, { foreignKey: 'master_property_id' }); // done

/* ------------------------------------------------------------------------------- */

/** Property Listing Association **/ 
// User.hasMany(PropertyListing, { foreignKey: 'seller_id' }); // done
// PropertyListing.belongsTo(User, { foreignKey: 'seller_id' }) // done

PropertyTypes.hasOne(PropertyListing, { foreignKey: 'property_type_id' }); // done
PropertyListing.belongsTo(PropertyTypes, { foreignKey: 'property_type_id', as: 'property_type' }) // done

ListingTypes.hasOne(PropertyListing, { foreignKey: 'listing_type_id' }); // done
PropertyListing.belongsTo(ListingTypes, { foreignKey: 'listing_type_id' }) // done

UnitDetails.hasOne(PropertyListing, { foreignKey: 'unit_detail_id' }); // done
PropertyListing.belongsTo(UnitDetails, { foreignKey: 'unit_detail_id', as: 'unit_details' }); //done

Location.hasOne(PropertyListing, { foreignKey: 'location_id' }); // done
PropertyListing.belongsTo(Location, { foreignKey: 'location_id', as: 'location' }); //done

Amenities.hasOne(PropertyListing, { foreignKey: 'amenity_id' }); // done
PropertyListing.belongsTo(Amenities, { foreignKey: 'amenity_id', as: 'amenities' }); //done

PropertyPhoto.hasOne(PropertyListing, { foreignKey: 'property_photos_id' }); // done
PropertyListing.belongsTo(PropertyPhoto, { foreignKey: 'property_photos_id', as: 'photos' }); //done

/* ------------------------------------------------------------------------------- */

/** Master Property Listing Association **/

PropertyListing.hasOne(MasterPropertyList, { foreignKey: 'property_listing_id' }); // done
MasterPropertyList.belongsTo(PropertyListing, { foreignKey: 'property_listing_id', as: 'listings' }); //done

// User.hasMany(MasterPropertyList, { foreignKey: 'seller_id' });// done
// MasterPropertyList.belongsTo(User, { foreignKey: 'seller_id' }); // done

/* ------------------------------------------------------------------------------- */

/** Highlight Association **/ 

User.hasMany(Highlight, { foreignKey: 'user_id' }); // done
Highlight.belongsTo(User, { foreignKey: 'user_id' }); // done

MasterPropertyList.hasMany(Highlight, { foreignKey: 'master_property_id' });  // done
Highlight.belongsTo(MasterPropertyList, { foreignKey: 'master_property_id' }); // done

/* ------------------------------------------------------------------------------- */

/** Property Views Association **/ 
User.hasMany(PropertyViews, { foreignKey: 'user_id' }); // done
PropertyViews.belongsTo(User, { foreignKey: 'user_id' }); // done

MasterPropertyList.hasMany(PropertyViews, { foreignKey: 'master_property_id' }); // done
PropertyViews.belongsTo(MasterPropertyList, { foreignKey: 'master_property_id' }); // done

/* ------------------------------------------------------------------------------- */

/** Sold Properties Association **/ 
MasterPropertyList.hasOne(SoldProperties, { foreignKey: 'master_property_id' }); // done
SoldProperties.belongsTo(MasterPropertyList, { foreignKey: 'master_property_id' }); // done

User.hasMany(SoldProperties, { foreignKey: 'user_id' }); // done 
SoldProperties.belongsTo(User, { foreignKey: 'user_id' }); // done

/* ------------------------------------------------------------------------------- */

/** Property Amenities Association **/ 
CustomAmenities.hasOne(Amenities, { foreignKey: 'custom_amenity_id' });
Amenities.belongsTo(CustomAmenities, { foreignKey: 'custom_amenity_id', as: 'custom_amenities' });

CustomInclusions.hasOne(Amenities, { foreignKey: 'custom_inclusion_id' });
Amenities.belongsTo(CustomInclusions, { foreignKey: 'custom_inclusion_id', as: 'custom_inclusion' });

/** APPROVER Association **/ 
Role.hasMany(Approvers, { foreignKey: 'role_id' });
Approvers.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });

/* ------------------------------------------------------------------------------- */


/** Property Approvals Association **/ 
Approvers.hasMany(Approvals, { foreignKey: 'approver_id' });
Approvals.belongsTo(Approvers, { foreignKey: 'approver_id', as: 'approver' });

PropertyListing.hasMany(Approvals, { foreignKey: 'property_listing_id' });
Approvals.belongsTo(PropertyListing, { foreignKey: 'property_listing_id', as: 'listing' });

Applications.hasMany(Approvals, { foreignKey: 'application_id' });
Approvals.belongsTo(Applications, { foreignKey: 'application_id', as: 'application' });

// Approvals.hasOne(MasterPropertyList, { foreignKey: 'master_property_id' });
// MasterPropertyList.belongsTo(Approvals, { foreignKey: 'master_property_id' });

/* ------------------------------------------------------------------------------- */

/** Property Approvals Association **/ 
Applications.hasMany(ApplicationCancellation, { foreignKey: 'application_id' });
ApplicationCancellation.belongsTo(Applications, { foreignKey: 'application_id', as: 'application' });

/* ------------------------------------------------------------------------------- */

module.exports = {
    User,
    Role,
    MasterPropertyList,
    PropertyListing,
    Save,
    Highlight,
    PropertyViews,
    SoldProperties,
    CustomAmenities,
    Amenities,
    PropertyTypes,
    ListingTypes,
    UnitDetails,
    Location,
    PropertyPhoto,
    FeaturesLists,
    Approvals,
    Approvers,
    CustomInclusions
}