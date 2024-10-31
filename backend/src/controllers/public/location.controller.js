'use strict'

const GenerateToken = require("../../utils/_api/Token.api");
const { Province, Countries, Cities } = require("../../utils/_api/address.api");
const DataResponseHandler = require("../../utils/_helper/DataResponseHandler.helper");
const SuccessFormatter = require("../../utils/_helper/SuccessFormatter.helper");
const SuccessLoggerHelper = require("../../utils/_helper/SuccessLogger.helper");

require("dotenv").config();

module.exports = {
    GetProvince: async (req, res, next) => {
        try {

            const getToken = await GenerateToken();

            if ((getToken)) {
                const token = getToken.data.token;

                const get_province = await Province(token);

                const provinces = DataResponseHandler(
                    get_province.data.data,
                    "RETRIEVED_SUCCESSFULLY",
                    200,
                    true,
                    "Provinces Retrieved Successfully"
                )

                const provinces_logger = DataResponseHandler(
                    get_province.data.data.length,
                    "RETRIEVED_SUCCESSFULLY",
                    200,
                    true,
                    "Provinces Retrieved Successfully"
                )

                const success = SuccessFormatter(provinces, 200, "Provinces Retrieved Successfully");
                SuccessLoggerHelper(req, provinces_logger);

                res.status(200).send(success)

            }else {
                throw DataResponseHandler(
                    { getToken },
                    "SERVER_ERROR",
                    500,
                    false,
                    "We're sorry, something went wrong on our end. Please try again later or contact our support team."
                );
            }
            
        } catch (error) {
            console.log(error);
            
            next(error)
        }
    },
    GetCities: async (req, res, next) => {
        try {

            const getToken = await GenerateToken();

            if ((getToken)) {
                const token = getToken.data.token;

                const get_cities = await Cities(token);

                const cities = DataResponseHandler(
                    get_cities.data.data,
                    "RETRIEVED_SUCCESSFULLY",
                    200,
                    true,
                    "Provinces Retrieved Successfully"
                )

                const cities_logger = DataResponseHandler(
                    get_cities.data.data.length,
                    "RETRIEVED_SUCCESSFULLY",
                    200,
                    true,
                    "Provinces Retrieved Successfully"
                )

                const success = SuccessFormatter(cities, 200, "Provinces Retrieved Successfully");
                SuccessLoggerHelper(req, cities_logger);

                res.status(200).send(success)

            }else {
                throw DataResponseHandler(
                    { getToken },
                    "SERVER_ERROR",
                    500,
                    false,
                    "We're sorry, something went wrong on our end. Please try again later or contact our support team."
                );
            }
            
        } catch (error) {
            next(error)
        }
    },

    GetCountries: async (req, res, next) => {
        try {

            const getToken = await GenerateToken();

            if ((getToken)) {
                const token = getToken.data.token;

                const get_countries = await Countries(token);

                const countries = DataResponseHandler(
                    get_countries.data.data,
                    "RETRIEVED_SUCCESSFULLY",
                    200,
                    true,
                    "Provinces Retrieved Successfully"
                )

                const countries_logger = DataResponseHandler(
                    get_countries.data.data.length,
                    "RETRIEVED_SUCCESSFULLY",
                    200,
                    true,
                    "Provinces Retrieved Successfully"
                )

                const success = SuccessFormatter(countries, 200, "Provinces Retrieved Successfully");
                SuccessLoggerHelper(req, countries_logger);

                res.status(200).send(success)

            }else {
                throw DataResponseHandler(
                    { getToken },
                    "SERVER_ERROR",
                    500,
                    false,
                    "We're sorry, something went wrong on our end. Please try again later or contact our support team."
                );
            }
            
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}