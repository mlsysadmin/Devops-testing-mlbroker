
const DataResponseHandler = (data, code, status, success, message) => {
    return {
        data,
        code,
        status,
        success,
        message
    }
}

module.exports = DataResponseHandler;