const express = require("express");
const SUPPORT_ROUTER = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const { Validation } = require("../../../middleware/_validator/validator.middleware");
const {
    listing_id,
    EditListingBody,
    UpdateApprovalBody,
    ListingByApprover,
    property_status,
    GetMasterDetailsParams
} = require('../../../utils/_helper/validationSchema.helper');

const { EditPropertyListing, 
    ListingApprovalEscalation, 
    GetForApprovalListingByApprover, 
    GetAllMasterListing, 
    GetMasterListingDetails, 
    GetAllDeniedListings,
    AllSoldListingsCount,
    GetListingDetails
} = require("../../../controllers/_listings/support/support.listing.controller");

// POST
SUPPORT_ROUTER.post('/update-listing',
    Validation(listing_id, "query", 'listing_id'), upload.none(),
    Validation(EditListingBody, "body", 'payload'), EditPropertyListing
);

SUPPORT_ROUTER.post('/update-approval', 
    Validation(UpdateApprovalBody, 'body', 'payload'), 
    ListingApprovalEscalation
);

// GET
SUPPORT_ROUTER.get('/get/listing/for-approval', Validation(ListingByApprover, 'query', 'payload'), GetForApprovalListingByApprover);
SUPPORT_ROUTER.get('/get/listing/master/all', Validation(property_status, 'query', 'property_status'), GetAllMasterListing);
SUPPORT_ROUTER.get('/get/listing/master/one', Validation(GetMasterDetailsParams, 'query', 'payload'), GetMasterListingDetails);
SUPPORT_ROUTER.get('/get/listing/details/one', Validation(listing_id, 'query', 'listing_id'), GetListingDetails);
SUPPORT_ROUTER.get('/get/listing/denied/all', GetAllDeniedListings);
SUPPORT_ROUTER.get('/get/listing/total-summary', Validation(ListingByApprover, 'query', 'payload'), AllSoldListingsCount);

module.exports = SUPPORT_ROUTER;
