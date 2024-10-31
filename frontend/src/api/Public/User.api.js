'use strict'

const { MLBROKERAGEAxiosInstance } = require("../../helper/axios");

const Config = (params, headers) => {
    const config = {
        headers: {
            ...headers
        },
        params: {
            ...params
        }
    }

    return config;
}

const CallGetApi = async (endpoint, config) => {

    try {

        const response = await MLBROKERAGEAxiosInstance.get(endpoint, config);

        return response.data;
        
    } catch (error) {
        throw error;
    }
}

const GoogleSignIn = async () => {
    try {

        const endpoint = `api/user/support/sign-in`

        const headers = {
            'x-api-key': process.env.REACT_APP_API_KEY
        }
        const config = Config({}, headers);

        const getUrl = await CallGetApi(endpoint, config);

        return getUrl;
        
    } catch (error) {
        throw error.response;
    }
}

const Logout = async () => {
    try {

        const endpoint = `api/user/support/logout`

        const headers = {
            'x-api-key': process.env.REACT_APP_API_KEY
        }
        const config = Config({}, headers);

        const getUrl = await CallGetApi(endpoint, config);

        return getUrl;
        
    } catch (error) {
        throw error.response;
    }
}

const searchKyc = async (cellphoneNumber) => {
	try {
		const reqbody = {
            payload : {
                cellphoneNumber
            }
		};
		console.log("Sending payload:", reqbody); 
		
        const config = {
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.REACT_APP_API_KEY,
			},
		};

		const response = await MLBROKERAGEAxiosInstance.post(
			"/api/user/search-kyc",
			reqbody,
			config
		);

		return response.data;
	} catch (error) {
		console.error(
			"Error fetching KYC data:",
			error.response ? error.response.data : error.message
		);
		throw error;
	}
};



export { GoogleSignIn, Logout, searchKyc };