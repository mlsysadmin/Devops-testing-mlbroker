'use strict'

const express = require("express");
const PUBLIC_ROUTER = express.Router();

const { GetProvince, GetCities, GetCountries } = require("../../controllers/public/location.controller");
const { GetAllMasterListings, GetMasterListingDetails } = require("../../controllers/public/listing.contoller");
const { SendInquiry, SendMessage, SendRefinancing, SendBuyHome, SendSearchProperty, SendListingApproved } = require("../../controllers/email/contactEmail.controller");

PUBLIC_ROUTER.get('/get/provinces', GetProvince);
PUBLIC_ROUTER.get('/get/cities', GetCities);
PUBLIC_ROUTER.get('/get/countries', GetCountries);

PUBLIC_ROUTER.get('/get/listing/all', GetAllMasterListings);
PUBLIC_ROUTER.get('/get/listing/one', GetMasterListingDetails);
PUBLIC_ROUTER.post('/mail/send-email-inquiry', SendInquiry);
PUBLIC_ROUTER.post('/mail/send-email', SendMessage);
PUBLIC_ROUTER.post('/mail/refinance-home', SendRefinancing);
PUBLIC_ROUTER.post('/mail/buy-home', SendBuyHome);
PUBLIC_ROUTER.post('/mail/search-property', SendSearchProperty);
PUBLIC_ROUTER.post('/mail/listing', SendListingApproved);

module.exports = PUBLIC_ROUTER;

