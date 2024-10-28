const express = require("express");
const USER_ROUTER = express.Router();

const auth = require("../../middleware/_auth/jwt.auth.middleware");
const { Login, Register, SearchUser, SearchKyc, GoogleSignIn, UserLogout } = require("../../controllers/_users/user.controller");
const { Validation } = require("../../middleware/_validator/validator.middleware");
const {
    searchKyc, LoginBody
} = require("../../utils/_helper/validationSchema.helper");
const verifyApiKey = require("../../middleware/_auth/api.auth.middleware");
const verifyToken = require("../../middleware/_auth/jwt.auth.middleware");

USER_ROUTER.post('/login', Validation(LoginBody, "body"), Login);
// USER_ROUTER.post('/register', Validation(ValidationSchema.RegisterBody, "body"), Register);
USER_ROUTER.post('/register', Register);
USER_ROUTER.post('/search-user', verifyApiKey, SearchUser);
USER_ROUTER.post('/search-kyc', verifyApiKey, Validation(searchKyc, 'body', 'payload'), SearchKyc);
USER_ROUTER.get('/support/sign-in', verifyApiKey, GoogleSignIn);
USER_ROUTER.get('/support/sign-in/callback', verifyApiKey, GoogleSignIn);
USER_ROUTER.get('/support/logout', verifyApiKey, verifyToken, UserLogout);

module.exports = USER_ROUTER;