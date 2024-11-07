'use strict'

require('dotenv').config()

const Joi = require('joi');
const ErrorFormatter = require('../../utils/_helper/ErrorFormatter.helper');

module.exports = {
    Validation: (schemaName, property, property_name) => {
        try {
            return async (req, res, next) => {
                try {
                    const isValidSchema = Joi.isSchema(schemaName);
                    
                    // const parsedData = JSON.parse(req[property].payload);
                    const parsedData = req[property][property_name];
        
                    if (isValidSchema) {
                        
                        await schemaName.validateAsync(parsedData, {
                            abortEarly: false
                        });
                        next();
                        
                    }else{
                        const response = {
                            data: isValidSchema,
                            code: "UNPROCESSABLE_ENTITY",
                            status: 422,
                            success: false,
                            message: "Can't process your request right now. Please contact our support team."
                        }
                        
                        // res.send(response).status(400);
                        next(response);
                    }
                        
                } catch (error) {

                    if (error) {
                        const { details } = error;
            
                        let errors = [{}];
                        
                        details.forEach(e => errors[0][e.path] = e.message);
            
                        const response = {
                            data: errors,
                            code: "UNPROCESSABLE_ENTITY",
                            status: 422,
                            success: false,
                            message: "Can't process your request right now. Please contact our support team."
                        }
                        
                        // res.status(422).send(response);
                        next(response)
                    }
                    else{

                        let err = ErrorFormatter(req.url, "SERVER_ERROR", 500, "We're sorry, something went wrong on our end. Please try again later or contact our support team.")
                        res.send(err).status(500)
                    }
                }
            }
        } catch (error) {
            next(error)
            // res.send(error)
        }
    }
    
}