'use strict'

require('dotenv').config();

const { Op } = require('sequelize');
const { JwtSign } = require("../../services/jwt.auth.service");
const { FindUserOne, FindOneSupportByEmail } = require("../../streamline/user.datastream");
const SuccessFormatter = require("../../utils/_helper/SuccessFormatter.helper");
const { User, Role } = require("../../models/main.model");
const SuccessLoggerHelper = require('../../utils/_helper/SuccessLogger.helper');
const DataResponseHandler = require('../../utils/_helper/DataResponseHandler.helper');
const { VerifyHash, Hash } = require('../../utils/_helper/hash.helper');
const GenerateToken = require('../../utils/_api/Token.api');
const { SearchUserKyc } = require('../../utils/_api/kyc.api');
const { GenerateURL, GoogleAuth } = require('../../services/google.auth.service');

const { google } = require('googleapis');
const { UpdateTokenVersion } = require('../../utils/_helper/Jwt.helper');

module.exports = {
    Login: async (req, res, next) => {
        try {

            const { email } = req.body.payload
            const findUser = await FindUserOne({ email });

            if (findUser) {
                // const verifyPassword = await VerifyHash(findUser.password);

                // if (verifyPassword) {
                //     const user = DataResponseHandler(
                //         findUser,
                //         "VERIFY_SUCCESS",
                //         200,
                //         true,
                //         "SUCCESS"
                //     )

                //     const token = JwtSign();
                //     const domain = process.env.COOKIE_DOMAIN;

                //     const cookieOptions = {
                //         // expires: new Date(Date.now() + 300000),
                //         maxAge: 300000, // 5 min
                //         path: '/',
                //         httOnly: true,
                //         secure: true,
                //         sameSite: true,
                //         domain,
                //         signed:true
                //         // expires: new Date(Date.now() + 900000)
                //     }

                //     res.cookie('access_token', token, cookieOptions)
                //     res.cookie('account_details', JSON.stringify(user), cookieOptions)

                //     // res.append('Set-Cookie',`access_token=${token};MaxAge=${Math.floor(Date.now() / 1000) + (5 * 60)};Path=/;HttOnly=true;Secure=true;SameSite=true;Domain=localhost`)
                //     // res.append('Set-Cookie',`account_details=${JSON.stringify(user.data)};MaxAge=${Math.floor(Date.now() / 1000) + (5 * 60)};Path=/;HttOnly=true;Secure=true;SameSite=true;Domain=localhost`)
                //     const success = SuccessFormatter(user, 200, "Logged In Successfully");

                //     SuccessLoggerHelper(req, user);

                //     res.status(200).send(success);
                // }else{

                //     throw DataResponseHandler(
                //         null,
                //         "AUTHENTICATION_ERROR",
                //         401,
                //         false,
                //         "It looks like the email address or password you entered is incorrect."
                //     );
                // }
                const token = JwtSign();
                const domain = process.env.COOKIE_DOMAIN;

                const cookieOptions = {
                    // expires: new Date(Date.now() + 300000),
                    maxAge: 300000, // 5 min
                    path: '/',
                    httOnly: true,
                    secure: true,
                    sameSite: true,
                    domain,
                    signed: true
                    // expires: new Date(Date.now() + 900000)
                }

                res.cookie('access_token', token, cookieOptions);

                const user = DataResponseHandler(
                    findUser,
                    "VERIFY_SUCCESS",
                    200,
                    true,
                    "SUCCESS"
                )
                const success = SuccessFormatter(user, 200, "Logged In Successfully");

                SuccessLoggerHelper(req, user);

                res.status(200).send(success);

            }
            else {
                throw DataResponseHandler(
                    null,
                    "AUTHENTICATION_ERROR",
                    401,
                    false,
                    "We couldn't find an account associated with this email address or mobile number."
                );
            }


        } catch (error) {
            next(error)
        }
    },
    Register: async (req, res, next) => {
        try {


        } catch (error) {
            next(error)
        }
    },
    SearchKyc: async (req, res, next) => {
        try {

            const params = req.body.payload;

            const getToken = await GenerateToken();

            console.log(req.body);
            if ((getToken) && params) {
                const token = getToken.data.token;

                const searchkyc = await SearchUserKyc(token, params);

                const kyc = DataResponseHandler(
                    searchkyc.search_ckyc.data.data,
                    searchkyc.code,
                    200,
                    true,
                    searchkyc.message
                )

                const success = SuccessFormatter(kyc, 200, searchkyc.message);
                SuccessLoggerHelper(req, kyc);

                res.status(200).send(success)

            } else {
                throw DataResponseHandler(
                    { params, getToken },
                    "SERVER_ERROR",
                    500,
                    false,
                    "We're sorry, something went wrong on our end. Please try again later or contact our support team."
                );
            }

        } catch (error) {
            next(error);
        }
    },
    SearchUser: async (req, res, next) => {
        try {

            const data = req.body.payload;
            const params = {
                [Op.or]: [
                    {
                        email: data.email,
                    },
                    {
                        mobile_number: data.mobile_number
                    }
                ]
            }; // -> required params used in where clause

            const findUser = await FindUserOne(params);

            if (findUser) {

                const user = DataResponseHandler(
                    null,
                    "ACCOUNT_ALREADY_EXIST",
                    200,
                    true,
                    "SUCCESS"
                )

                const success = SuccessFormatter(user, 200, "It looks like there's already an account associated with these email address or mobile number.");

                SuccessLoggerHelper(req, user);

                res.status(200).send(success);
            } else {
                const user = DataResponseHandler(
                    null,
                    "ACCOUNT_DOES_NOT_EXIST",
                    200,
                    true,
                    "SUCCESS"
                )

                const success = SuccessFormatter(user, 200, "");

                SuccessLoggerHelper(req, user);

                res.status(200).send(success);
            }

        } catch (error) {
            next(error)
        }
    },

    // SUPPORT
    GoogleSignIn: async (req, res, next) => {
        try {

            const api_key = process.env.X_API_KEY;

            const URL = await GenerateURL(api_key);

            console.log("GENERATED URL: ", URL);
            

            const data = DataResponseHandler(
                { url: URL },
                "GENERATE_GOOGLE_AUTH_URL",
                200,
                true,
                "SUCCESS"
            )
            const success = SuccessFormatter(data, 200, "URL Generated");

            SuccessLoggerHelper(req, data);

            res.status(200).send(success);

        } catch (error) {
            next(error)
        }
    },

    GoogleSignInCallback: async (req, res, next) => {
        try {

            const code = req.query.code;

            const OAuth2Client = await GoogleAuth();

            const getToken = await OAuth2Client.getToken(code);

            OAuth2Client.setCredentials(getToken.tokens);

            let OAuthClient = google.oauth2({
                auth: OAuth2Client,
                version: 'v2'
            })
            const userInfo = await OAuthClient.userinfo.get();
            const email = userInfo.data.email;

            const verifyUser = await FindOneSupportByEmail({email});

            if (!verifyUser) {
                throw DataResponseHandler(
                    verifyUser,
                    "USER_NOT_FOUND",
                    404,
                    false,
                    "Login Failed."
                );
            } else {

                const generateSessionToken = JwtSign(verifyUser.approver_id);

                const tokenCookieOptions = {
                    expires: new Date(Date.now() + 300000),
                    maxAge: 300000, // 5 min
                    // path: '/',
                    // httOnly: true,
                    // secure: true,
                    // sameSite: true,
                    // domain: process.env.CLIENT_APP_URL,
                    // httOnly: process.env.COOKIE_HTTP_ONLY,
                    // secure: process.env.COOKIE_SECURE,
                    domain: process.env.COOKIE_DOMAIN,
                    signed: true
                    // expires: new Date(Date.now() + 900000)
                }

                const useCookieOptions = {
                    expires: new Date(Date.now() + 300000),
                    maxAge: 300000, // 5 min
                    // path: '/',
                    // httOnly: process.env.COOKIE_HTTP_ONLY,
                    // secure: process.env.COOKIE_SECURE,
                    // sameSite: true,
                    domain: process.env.COOKIE_DOMAIN,
                    // expires: new Date(Date.now() + 900000)
                }

                const login = DataResponseHandler(
                    verifyUser.dataValues,
                    "LOGIN_SUCCESSFULLY",
                    200,
                    true,
                    "SUCCESS"
                );
    
                SuccessLoggerHelper(req, login);

                res.cookie('access_token', generateSessionToken, tokenCookieOptions);
                res.cookie('user_details', JSON.stringify(verifyUser), useCookieOptions);

                res.redirect(`${process.env.CLIENT_APP_URL}/support/dashboard`);
            }

        } catch (error) {
            next(error)
        }
    },

    UserLogout: async (req, res, next) => {
        try {

            console.log(req.access_token);
            const user_id = req.access_token.sub;

            const updatokenTokenVersion = UpdateTokenVersion(user_id);

            res.send(updatokenTokenVersion);

        } catch (error) {
            next(error);
        }
    },

}