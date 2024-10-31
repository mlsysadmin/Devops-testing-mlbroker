'use strict'

require('dotenv').config();
const Nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

// import hbs from 'nodemailer-express-handlebars';

const MailTransporter = async () => {

    const emailTransporter = Nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // or 'STARTTLS'
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
            type: 'custom',
            method: 'EMAIL-CUSTOM-HANDLE'
        },
    });

    // const handlebarOptions = {
    //     viewEngine: {
    //         extName: '.handlebars',
    //         partialsDir: 'views/patials',
    //         layoutsDir: 'views/layouts',
    //         defaultLayout: '',
    //     },
    //     viewPath: 'views/templates',
    //     extName: '.handlebars',
    // };

    // emailTransporter.use('compile', hbs(handlebarOptions));

    return emailTransporter;
}

const EmailTemplate = (filePath, data) => {
    try {
        
        const templatePath = path.resolve(__dirname,'../views/template', filePath);
        console.log("template path", templatePath);
        
        const templateFile = fs.readFileSync(templatePath, 'utf-8');
        const template = handlebars.compile(templateFile);

        return template(data);
        
    } catch (error) {
        return error;
    }
}

const SendEmail = async (emailTemp, emailType, references, emailTo) => {
    
    let messageContent = {
        subject: `Brokerage Client: ${emailType}`,
        to: emailTo,
        from: `M Lhuillier Properties Realty & Brokerage <${process.env.EMAIL_FROM}>`,
        html: emailTemp,
        references: references
    }

    const transporter = await MailTransporter();

    const send = await transporter.sendMail(messageContent);

    return send;
}

module.exports = {
    SendEmail,
    EmailTemplate
};