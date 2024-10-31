'use strict'
const log4js = require('log4js');
const path = require("path");

const dateInstance = new Date();
let date = dateInstance.getFullYear().toString() + (("0" + (dateInstance.getMonth() + 1)).slice(-2)).toString() + ("0" + dateInstance.getDate()).slice(-2).toString();

log4js.addLayout("json", (config) => {
    return (logEvent) => {
        console.log(logEvent);
        return JSON.stringify(logEvent) + config.separator;
    }
})

const patternInfo = '%p %d %h %n %X{context} %m' // %log level, %date, %addcontext, %log data, %newline, %line number
const patternError = '%p %d %h %n %X{context} %m %l %s' // %log level, %date, %addcontext, %log data, %newline, %line number, %call stack

log4js.configure(
    {
        appenders: {
            logAppenderInfo:{
                type:'dateFile',
                filename: path.join(__dirname, `../../logs/_info/ML_BROKERAGE_INFO_${date}.log`),
                layout:{
                    type: 'pattern',
                    pattern: patternInfo,
                    // separator: ","
                }
            },
            logAppenderError:{
                type:'dateFile',
                filename: path.join(__dirname, `../../logs/_errors/ML_BROKERAGE_ERROR_${date}.log`),
                layout:{
                    type: 'pattern',
                    pattern: patternError,
                    // separator: ","
                }
            },
            logAppenderFatal:{
                type:'dateFile',
                filename: path.join(__dirname, `../../logs/_fatal/ML_BROKERAGE_FATAL_${date}.log`),
                layout:{
                    type: 'pattern',
                    pattern: patternError,
                    // separator: ","
                }
            }
        },
        categories:{
            default:{
                appenders:['logAppenderInfo'],
                level: 'info',
            },
            error:{
                appenders:['logAppenderError'],
                level: 'error',
                enableCallStack: true
            },
            fatal:{
                appenders:['logAppenderFatal'],
                level: 'fatal',
                enableCallStack: true
            },
        },
        pm2: true,
        
    }
)
const Get_logger = (level) => ( log4js.getLogger(level) )


module.exports = {
    Get_logger
};