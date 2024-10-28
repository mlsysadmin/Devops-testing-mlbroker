require("dotenv").config();
require('cookie-parser');
const { JsonWebTokenError, TokenExpiredError, verify, NotBeforeError } = require("jsonwebtoken");
const DayJS = require('dayjs');
const DataResponseHandler = require("../../utils/_helper/DataResponseHandler.helper");
const { GetTokenVersion } = require("../../utils/_helper/Jwt.helper");

const verifyToken = (req, res, next) => {
    const token =
        // req.body.token || req.query.token || req.headers["x-access-token"];
        req.signedCookies.access_token;

    try {
        if (!token) {
            throw DataResponseHandler(
                token,
                "TOKEN_NOT_FOUND",
                403,
                false,
                "You are not authorized to access the resource. Please refresh the page to login again."
            )
        }

        const decoded = verify(token, process.env.SECRET_KEY, {
            // maxAge: '10m'
            maxAge: '1h'
            // maxAge: '5m'
        });
        
        console.log("decoded: ", decoded);
        const payload = decoded;

        const dateNow = DayJS(new Date).format('DD-MM-YYYY');

        const api_key = process.env.API_KEY;
        const userId = payload.sub;
        const payLoadVersion = payload.version;

        const currentTokenVersion = GetTokenVersion(userId)

        if (payload.api_key === api_key && payload.date === dateNow && payLoadVersion === currentTokenVersion) {
            req.access_token = payload;
            next(); 
        }else{
            let error = {
                name: "TokenInvalidError",
                message: "Invalid token",
                exp: payload.exp
            };

            throw DataResponseHandler(
                JSON.stringify(error),
                "AUTHENTICATION_FAILED",
                401,
                false,
                "You are not authorized to access the resource. Please refresh the page to login again."
            )
        }
    } catch (err) {
        console.log(err);
        // const expiredAt = DayJS(err.expiredAt).format('DD-MM-YYYY');
        const JsonErrors = [JsonWebTokenError, TokenExpiredError, NotBeforeError];
        
        JsonErrors.forEach(e => {
            if (err instanceof e) {
                
                next(
                    DataResponseHandler(
                        JSON.stringify(err),
                        "AUTHENTICATION_FAILED",
                        401,
                        false,
                        "You are not authorized to access the resource. Please refresh the page to login again."
                    )
                )
            }
        })
        
        next(err);
    }
}

module.exports = verifyToken;
