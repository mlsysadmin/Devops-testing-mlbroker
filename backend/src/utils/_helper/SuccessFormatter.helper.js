'use strict'

const SuccessFormatter = (data, status, message) => {
    return {
        data: {
            status,
            ...data,
            message
        }
    }
}

module.exports = SuccessFormatter;