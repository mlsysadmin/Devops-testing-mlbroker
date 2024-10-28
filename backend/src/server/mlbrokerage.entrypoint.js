'use strict'

require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { 
    USER_ROUTER, 
    LISTING_ROUTER, 
    SELLER_ROUTER, 
    SUPPORT_ROUTER, 
    PUBLIC_ROUTER, 
    GOOGLE_ROUTER
} = require('../routers/router.main');
const Logger = require('../config/_log/mlbrokerage.logger');
const ErrorHandler = require('../utils/_helper/ErrorHandler.helper');
const DataResponseHandler = require('../utils/_helper/DataResponseHandler.helper');
const verifyApiKey = require('../middleware/_auth/api.auth.middleware');
const { GoogleSignInCallback } = require('../controllers/_users/user.controller');
const verifyToken = require('../middleware/_auth/jwt.auth.middleware');

const app = express();

const PORT = process.env.PORT

const InfoLogger = Logger.Get_logger("default");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet({
    maxAge: 31536000
}))

app.use(cors({
    origin: process.env.CLIENT_APP_URL,
    credentials: true,
}));

app.use(cookieParser(process.env.SECRET_KEY))

// app.use(express.static(path.join(__dirname, "../views/template")));

// app.get("/index", (req, res) => {
//   res.sendFile(path.join(__dirname, "../views/template", "index.html"));
// });

app.use('/', GOOGLE_ROUTER);
app.use('/api/user', USER_ROUTER);
app.use('/api/listing', LISTING_ROUTER);
app.use('/api/seller', SELLER_ROUTER);
app.use('/api/support', verifyToken, verifyApiKey, SUPPORT_ROUTER);
app.use('/api/public', verifyApiKey, PUBLIC_ROUTER);


// If accessing non-existing route - 404 --------------------------------------------------
app.get("*", (req, res, next) => {

    let error = {
        name: "RESOURCE_NOT_FOUND",
        message: "Route does not exist",
        route: req.url
    };

    const response = DataResponseHandler(
        JSON.stringify(error),
        "RESOURCE_NOT_FOUND",
        404,
        false,
        "Can't process your request right now. Please contact our support team."
    )

    next(response);
});

app.post("*", (req, res, next) => {

    let error = {
        name: "RESOURCE_NOT_FOUND",
        message: "Route does not exist",
        route: req.url
    };

    const response = DataResponseHandler(
        JSON.stringify(error),
        "RESOURCE_NOT_FOUND",
        404,
        false,
        "Can't process your request right now. Please contact our support team."
    )

    next(response);
});
// --------------------------------------------------------------------------------------

app.use(ErrorHandler);

app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    InfoLogger.addContext("context", "ML Brokerage");
    InfoLogger.info(`Server listening on port ${PORT}`)
})