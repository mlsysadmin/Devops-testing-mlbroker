'use strict'

const Logger = require('../../config/_log/mlbrokerage.logger');
const InfoLogger = Logger.Get_logger("default");

module.exports = (request, response) => {

    let successContext = [{
        REQ: {
            url: request.url,
            method: request.method,
            query: JSON.stringify(request.query),
            params: JSON.stringify(request.params),
            body: JSON.stringify(request.body),
            headers: JSON.stringify(request.headers)
        },
        RES: {
            data: JSON.stringify(response.data),
            status: response.status,
            code: response.code,
            message: response.message
        }
    }]

    InfoLogger.addContext("context", `Logging.. | ML BROKERAGE`);
    InfoLogger.info(...successContext);
}