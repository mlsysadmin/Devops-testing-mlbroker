'use strict'

require("dotenv").config();

const ErrorFormatter = (code, status, message) => {
    return {
        data: {
            code,
            status,
            error:{
                status,
                message
            }
        }
    }
}

module.exports = ErrorFormatter;