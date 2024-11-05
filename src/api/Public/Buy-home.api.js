'use strict'

import {MLBROKERAGEAxiosInstance} from "../../helper/axios";

const GetCountry = async () => {
    try {
        const config = {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        }
        const response = await MLBROKERAGEAxiosInstance.get(`/api/public/get/countries`, config)
        
        return response.data.data.data;

    } catch (error) {
        throw error
    }
}

const GetProvince = async () => {
    try {
        const config = {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        }
        const response = await MLBROKERAGEAxiosInstance.get(`/api/public/get/provinces`, config)
        
        return response.data.data.data;

    } catch (error) {
        throw error
    }
}

const GetCities = async () => {
    try {
        const config = {
            headers: {
                'x-api-key': process.env.REACT_APP_API_KEY
            }
        }
        const response = await MLBROKERAGEAxiosInstance.get(`/api/public/get/cities`, config)
        
        return response.data.data.data;

    } catch (error) {
        throw error
    }
}

export{
    GetCountry,
    GetProvince,
    GetCities
}