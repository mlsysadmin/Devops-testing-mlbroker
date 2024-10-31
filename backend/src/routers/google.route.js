const express = require("express");
const { GoogleSignInCallback } = require("../controllers/_users/user.controller");
const GOOGLE_ROUTER = express.Router();

GOOGLE_ROUTER.get('/auth/google/callback', GoogleSignInCallback);

module.exports = GOOGLE_ROUTER;