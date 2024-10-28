'use strict'

require('dotenv').config();
const { default: axios } = require('axios');
const fs = require('fs');
const path = require('path');
const SuccessLoggerHelper = require('../utils/_helper/SuccessLogger.helper');

module.exports = {
    PutObject: async (files, prefix, upload_date) => {

        try {

            const PAR_URL = process.env.STORAGE_BUCKET_URL;
            const OBJECT_NAME = process.env.OBJECT_NAME;

            const filePath = files;
            let filenames = [];

            const upload_photos = filePath.map((file, i) => {
                
                // Read the file content
                const fileContent = fs.readFileSync(file.path);
                const fileName = path.basename(`${prefix}-${upload_date}-listingphoto_${i}`);
                const object = `${OBJECT_NAME}/${fileName}`;

                filenames.push({ photo: fileName });
                
                fs.unlinkSync(file.path);
                
                // Upload the file using HTTP PUT
                return axios.put(`${PAR_URL}${encodeURIComponent(object)}`, fileContent, {
                    headers: {
                        'Content-Type': 'image/png',
                        'Content-Disposition': `inline; filename="${fileName}"`,
                        // 'Content-Type': 'application/octet-stream',
                        // 'Content-Disposition': `attachment; filename="${fileName}"`,
                    }
                })
            })

            const response = await Promise.all(upload_photos);

            response.forEach(resp => {

                const request = {
                    url: resp.config.url,
                    method: 'PUT',
                    query:{},
                    params: {},
                    body: {}
                }
                const res = {
                    data: resp.data,
                    status: resp.status,
                    code: resp.statusText,
                    message: "File Uploaded Successfully"
                }
        
                SuccessLoggerHelper(request, res);
            })
            console.log("dafsfd", filenames);

            return filenames;

        } catch (error) {
            throw error;
        }
    },
    GetObject: async () => {
        try {

            // Replace with your PAR URL
            const PAR_URL = process.env.STORAGE_BUCKET_URL;
            const OBJECT_NAME = process.env.OBJECT_NAME;

            const response = await axios.get(`${PAR_URL}${OBJECT_NAME}`, {
                // const response = await axios.get(`${PAR_URL}${encodeURIComponent(object)}`, {
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": 'image/png'
                }
            });

            console.log('File data received:', response);

            return response;

        } catch (error) {
            throw error;
        }
    },
}