'use strict'

const { CKYC_API } = require('./axios.util');
const DataResponseHandler = require('../_helper/DataResponseHandler.helper');
const SuccessLoggerHelper = require('../_helper/SuccessLogger.helper');

const Logger = require('../../config/_log/mlbrokerage.logger');

const ErrLogger = Logger.Get_logger("error");

module.exports = {
    Province: async (token) => {
        try {
            const url = `/api/v1/addresses/provinces`;

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },

            };

            const province = await CKYC_API.get(url, config);

            const URL = province.config.baseURL + province.config.url;

            const request = {
                url: URL,
                method: 'GET',
                query: {},
                params: {},
                body: {},
                headers: config
            }
            const response = {
                data: province.data.data.length,
                status: province.status,
                code: province.statusText.toUpperCase(),
                message: "Provinces Retrieved Successfully"

            }

            SuccessLoggerHelper(request, response);

            return province

        } catch (error) {
            
            throw (error)
        }
    },
    Cities: async (token) => {
        try {
            const url = `/api/v1/addresses/cities`;

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },

            };

            const cities = await CKYC_API.get(url, config);

            const URL = cities.config.baseURL + cities.config.url;

            const request = {
                url: URL,
                method: 'GET',
                query: {},
                params: {},
                body: {},
                headers: config
            }
            const response = {
                data: cities.data.data.length,
                status: cities.status,
                code: cities.statusText.toUpperCase(),
                message: "Cities Retrieved Successfully"
            }

            SuccessLoggerHelper(request, response);

            return cities

        } catch (error) {

            throw (error)
        }
    },
    Countries: async (token) => {
        try {
            const url = `/api/v1/addresses/countries`;

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },

            };

            const countries = await CKYC_API.get(url, config);

            const URL = countries.config.baseURL + countries.config.url;

            const request = {
                url: URL,
                method: 'GET',
                query: {},
                params: {},
                body: {},
                headers: config
            }
            const response = {
                data: countries.data.data.length,
                status: countries.status,
                code: countries.statusText.toUpperCase(),
                message: "Countries Retrieved Successfully"
            }

            SuccessLoggerHelper(request, response);

            return countries

        } catch (error) {

            throw (error)
        }
    }
}