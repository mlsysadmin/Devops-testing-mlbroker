'use strict'

require("dotenv").config();
const Logger = require('../../config/_log/mlbrokerage.logger');
const ErrorFormatter = require("./ErrorFormatter.helper");

const ErrLogger = Logger.Get_logger("error");
const FatalLogger = Logger.Get_logger("fatal");

const ErrorHandler = async (error, request, response, next) => {
    try {

        const ServerErrors = [RangeError, TypeError, SyntaxError, Error, EvalError, ReferenceError, URIError]

        // let isServerError = false;

        ServerErrors.forEach(e => {
            if (error instanceof e) {
                throw error;
            }
        })

        let errorContext = [{
            REQ: {
                url: request.url,
                method: request.method,
                query: JSON.stringify(request.query),
                params: request.params,
                body: JSON.stringify(request.body),
            },
            RES: {
                data: JSON.stringify(error.data),
                status: error.status,
                code: error.code,
                message: error.message
            }
        }]

        ErrLogger.addContext('context', `Logging.. | ML BROKERAGE`);
        ErrLogger.error(...errorContext);

        const err = ErrorFormatter(error.code, error.status, error.message);

        response.status(error.status).send(err);

    } catch (e) {

        if (Object.keys(error).includes('response')) {

            let errorContext = [{
                REQ: {
                    url: request.url,
                    method: request.method,
                    query: request.query,
                    params: request.params,
                    body: {...request.body},
                },
                RES: {
                    URL: error.config.baseURL + ' ' + error.config.url,
                    data: {...error.response.data},
                    status: error.status,
                    code: error.code,
                    message: error.response.data.message
                }
            }]
            FatalLogger.addContext('context', `Logging.. | ML BROKERAGE`);
            FatalLogger.fatal(...errorContext);
        }

        else {
            FatalLogger.addContext('context', `Logging.. | ML BROKERAGE`);
            FatalLogger.fatal(e.toString());
        }

        let err = ErrorFormatter("SERVER_ERROR", 500, "We're sorry, something went wrong on our end. Please try again later or contact our support team.")
        response.status(500).send(err)
    }
}

module.exports = ErrorHandler;