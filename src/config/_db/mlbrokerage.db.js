'use strict'

require('dotenv').config();
const { Sequelize } = require("sequelize");
const Logger = require('../_log/mlbrokerage.logger');

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;

const FatalLogger = Logger.Get_logger("fatal");

const sequelize = new Sequelize(
    DB_NAME, DB_USER, DB_PASS,
    {
        host: DB_HOST,
        dialect: 'mysql',
        max: 10,
        min: 10,
        // logging: (...msg) => {
        //     console.log("msg", msg);
            
        // }
    }
)

sequelize.authenticate()
.then((r) => {
    console.log("Database is established successfully");
})
.catch(err => {
    console.log("Error authenticating database: ", err);
    FatalLogger.addContext('context', `Logging.. | ML BROKERAGE`);
    FatalLogger.fatal(err.toString());
})

module.exports = sequelize;