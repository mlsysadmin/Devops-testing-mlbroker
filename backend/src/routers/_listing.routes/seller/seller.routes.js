const express = require("express");
const SELLER_ROUTER = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const api_auth = require("../../../middleware/_auth/api.auth.middleware");
const auth = require("../../../middleware/_auth/jwt.auth.middleware");

const { Validation } = require("../../../middleware/_validator/validator.middleware");
const { 
    seller,
    ListingBody,
    DraftListingBody,
    GetSellerMasterListingParams
} = require('../../../utils/_helper/validationSchema.helper');
const { GetAllSellerListings, AddPropertyListing, DraftPropertyListing, GetAllDraftListing, GetAllMasterListingBySeller } = require("../../../controllers/_listings/seller/seller.listing.controller");

SELLER_ROUTER.get('/get/all-listings', /*api_auth,*/ Validation(seller, "query", "seller"), GetAllSellerListings);
SELLER_ROUTER.get('/get/all-listings/draft', /*auth,*/ Validation(seller, "query", "seller"), GetAllDraftListing);

// POST
SELLER_ROUTER.post('/add-listing', /*api_auth,*/ upload.any('files'), Validation(ListingBody, "body", 'payload'), AddPropertyListing);
SELLER_ROUTER.post('/save-draft-listing', Validation(DraftListingBody, "body", 'payload'), DraftPropertyListing);
SELLER_ROUTER.get('/get/listing/master/all', api_auth, Validation(GetSellerMasterListingParams, "query", "payload"), GetAllMasterListingBySeller)

module.exports = SELLER_ROUTER;
