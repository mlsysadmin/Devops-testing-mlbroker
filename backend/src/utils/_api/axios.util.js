'use strict'

require('dotenv').config();
const { default:axios } = require('axios');

const ML_WEB_APP = axios.create({
  baseURL: process.env.SYMPH_ML_WEB_BASE_URL,
});

const AUTH_SERVICE = axios.create({
  baseURL: process.env.AUTH_SERVICE_SYMPH_URL,
});

const STORAGE_BUCKET = axios.create({
    baseURL: process.env.STORAGE_BUCKET_URL,
});

const CKYC_API = axios.create({
    baseURL: process.env.SYMPH_CKYC_API_URL,
});

const ML_MONEY_API = axios.create({
    baseURL: process.env.SYMPH_ML_MONEY_API_URL,
});

module.exports = {
    ML_WEB_APP,
    AUTH_SERVICE,
    STORAGE_BUCKET,
    CKYC_API,
    ML_MONEY_API
}