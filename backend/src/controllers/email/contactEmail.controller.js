'use strict'

require('dotenv').config();
const { SendEmail, EmailTemplate } = require('../../services/email.service.js');
const DataResponseHandler = require('../../utils/_helper/DataResponseHandler.helper.js');
const SuccessFormatter = require('../../utils/_helper/SuccessFormatter.helper.js');
const SuccessLoggerHelper = require('../../utils/_helper/SuccessLogger.helper.js');

module.exports = {
    SendInquiry: async (req, res, next) => {
        try {
            const payload = req.body.payload;

            const path = 'inquiry.handlebars';

            const messageContent = {
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                message: payload.message,
                listingTitle: payload.listingTitle,
                propertyNo: payload.propertyNo,
            }

            const emailTemp = EmailTemplate(path, { ...messageContent });

            const sendInquiry = await SendEmail(emailTemp, 'Listing Inquiry', payload.message, process.env.EMAIL_TO);

            console.log(sendInquiry);

            res.send({ sendInquiry });


        } catch (error) {
            console.log('dsff', error);
            res.send(error)
        }
    },
    SendMessage: async (req, res, next) => {
        try {

            console.log(req.body);

            const payload = req.body.payload;

            const templateName = 'message.handlebars';

            const messageContent = {
                name: payload.name,
                email: payload.email,
                phone: payload.phone,
                message: payload.message,
            }

            const emailTemp = EmailTemplate(templateName, { ...messageContent });

            const sendMessage = await SendEmail(emailTemp, 'Customer Inquiry', payload.message, process.env.EMAIL_TO);

            console.log(sendMessage);

            res.send({ sendMessage });


        } catch (error) {
            console.log('dsff', error);
            next(error);
        }
    },

    SendRefinancing: async (req, res, next) => {
        try {

            const {
                reason, interest, property_type, property_usage,
                estimated_price, loan_balance, cash_take_out,
                employment_status, annual_income,
                declared_bankruptcy, late_mortgage_payments,
                current_credit_score, home_location, mobile_number,
                email, last_name, first_name,
                country, province, city,
                zipcode, others, source_of_income
            } = req.body.payload;

            const customerInfo = {
                name: `${last_name}, ${first_name}`,
                mobile_number, email,
                country, province, city,
                zipcode, others, source_of_income
            }

            const property = {
                reason, interest, property_type,
                property_usage, estimated_price,
            }

            const loan = {
                loan_balance, cash_take_out,
            }

            const details = {
                employment_status, annual_income,
                declared_bankruptcy, late_mortgage_payments,
                current_credit_score, home_location
            }

            const templateName = 'refinance.handlebars';

            const emailTemp = EmailTemplate(templateName, { customerInfo, property, loan, details });

            const reference = new Date();

            const sendMessage = await SendEmail(emailTemp, 'Refinancing (Refinance a Home)', reference, process.env.EMAIL_TO);

            console.log(sendMessage);

            res.send({ sendMessage });


        } catch (error) {
            next(error);
        }
    },
    SendBuyHome: async (req, res, next) => {
        try {

            const {
                estimated_price, property_type, property_usage,
                real_estate_agent, purchase_plan_date,
                current_home_ownership, plan_to_sell_current_home, estimated_downpayment,
                employment_status, declared_bankruptcy, annual_income,
                current_credit_score, home_location, mobile_number,
                email, last_name, first_name,
                country, province, city,
                zipcode, others, source_of_income
            } = req.body.payload;

            const customerInfo = {
                name: `${last_name}, ${first_name}`,
                mobile_number, email,
                country, province, city,
                zipcode, others, source_of_income
            }

            const property = {
                estimated_price, property_type,
                property_usage, real_estate_agent
            }

            const timeline = {
                purchase_plan_date, current_home_ownership,
                plan_to_sell_current_home
            }

            const details = {
                estimated_downpayment, employment_status, annual_income,
                declared_bankruptcy, current_credit_score, home_location
            }

            const templateName = 'buyahome.handlebars';

            const emailTemp = EmailTemplate(templateName, { customerInfo, property, timeline, details });

            const reference = new Date();

            const sendMessage = await SendEmail(emailTemp, 'Refinancing (Buy a Home)', reference, process.env.EMAIL_TO);

            console.log(sendMessage);

            res.send({ sendMessage });


        } catch (error) {
            next(error);
        }
    },
    SendSearchProperty: async (req, res, next) => {
        try {

            const {
                property_type, property_details,
                location_preference, budget_range,
                no_of_bedrooms, no_of_bathrooms, feature_and_amenities,
                mobile_number, email, last_name, first_name, suffix, middle_name
            } = req.body.payload;

            let fullname = `${first_name} ${middle_name} ${last_name} ${suffix}`;

            fullname = fullname.split(" ")
                .filter(f => !["null", null, undefined, "undefined", ""].includes(f))
                .map(f => f.trim()).join(" ");

            const customerInfo = {
                name: fullname,
                mobile_number, email,
            }

            const property = {
                property_type, property_details, location_preference,
                budget_range, no_of_bedrooms, no_of_bathrooms,
                feature_and_amenities
            }

            const templateName = 'searchproperty.handlebars';

            const emailTemp = EmailTemplate(templateName, { customerInfo, property });

            const reference = new Date();

            const sendMessage = await SendEmail(emailTemp, 'Request for a Search of Property', reference, process.env.EMAIL_TO);

            console.log(sendMessage);

            res.send({ sendMessage });


        } catch (error) {
            next(error);
        }
    },
    SendListingApproved: async (req, res, next) => {
        try {

            const {
                name, image_path, property_title, property_no, email
            } = req.body.payload;

            const image_link = `${process.env.IGOT_SOLUTION_BASE_URL}${image_path}`
            const link = `${process.env.CLIENT_APP_URL}/previewListing/?id=${property_no}`;
            const logo = `${process.env.IGOT_SOLUTION_BASE_URL}/assets/logo.png`

            const templateName = 'approvedlisting.handlebars';

            const emailTemp = EmailTemplate(templateName, { name, image_link, property_title, property_no, link, logo });

            const reference = new Date();

            const sendMessage = await SendEmail(emailTemp, 'Listing Approved', reference, email);
            console.log(sendMessage);

            const mail = DataResponseHandler(
                {response: sendMessage.response, accepted: sendMessage.accepted, rejected: sendMessage.rejected},
                "EMAIL_SENT",
                200,
                true,
                "SUCCESS"
            )
            const success = SuccessFormatter(mail, 200, "Email Sent");

            SuccessLoggerHelper(req, mail);

            res.send(success);


        } catch (error) {
            next(error);
        }
    }

}