'use strict'

const { CKYC_API } = require('./axios.util');
const DataResponseHandler = require('../_helper/DataResponseHandler.helper');
const SuccessLoggerHelper = require('../_helper/SuccessLogger.helper');

const Logger = require('../../config/_log/mlbrokerage.logger');

const ErrLogger = Logger.Get_logger("error");

module.exports = {
    SearchUserKyc: async (token, user) => {
        try {
            const url = `/api/v1/customers/exact-search`;

            const queryParams = user

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                params: { ...queryParams }

            };

            const search_ckyc = await CKYC_API.get(url, config);

            let data;
            let message;
            let code;

            const URL = search_ckyc.config.baseURL + search_ckyc.config.url;

            if (!search_ckyc.data.data) {
                data = search_ckyc.data.data;
                message = "No KYC found."
                code = "NO_KYC_FOUND";
            }
            else{
                data = search_ckyc.data.data.ckycId;
                message = "KYC Retrieved Successfully";
                code = "RETRIEVED_SUCCESSFULLY";
            }
            let request = {
                url: URL,
                method: 'GET',
                query: queryParams,
                params: {},
                body: {},
                headers: config
            }

            let response = {
                data,
                status: search_ckyc.status,
                code: search_ckyc.statusText.toUpperCase(),
                message

            }

            SuccessLoggerHelper(request, response);

            return {search_ckyc, message, code}

        } catch (error) {
            console.log(error);

            throw (resp)
        }
    }
}