require("dotenv").config();
require('cookie-parser');
const { JsonWebTokenError, TokenExpiredError, verify, NotBeforeError } = require("jsonwebtoken");
const DayJS = require('dayjs');
const DataResponseHandler = require("../../utils/_helper/DataResponseHandler.helper");

const verifyApiKey = (req, res, next) => {
    
    const api_key =
         req.headers["x-api-key"];
        // req.signedCookies.access_token;

    try {

        if (!api_key) {
            let error = {
                api_key: api_key,
                name: "API_KEY_NOT_FOUND",
                message: "No api key found"
            };

            throw DataResponseHandler(
                JSON.stringify(error),
                "FORBIDDEN",
                403,
                false,
                "You are not authorized to access the resource"
            )
        }

        const api_key_env = process.env.API_KEY;

        if (api_key_env === api_key) {
            next(); 
        }else{
            let error = {
                api_key: api_key,
                name: "API_KEY_NOT_VALID",
                message: "Invalid api key"
            };

            throw DataResponseHandler(
                JSON.stringify(error),
                "UNAUTHORIZED",
                401,
                false,
                "You are not authorized to access the resource"
            )
        }
    } catch (err) {
        // const expiredAt = DayJS(err.expiredAt).format('DD-MM-YYYY');
        
        next(err);
    }
}

module.exports = verifyApiKey;
