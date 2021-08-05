'use strict';

/**
 * Import module
 */
const log4js = require('log4js');
/**
 * Import config
 */
const {
    HTTPLogger,
} = require('../../src/helpers/logger');

/**
 * API logger middleware function
 * @returns 
 */
const apiLoggerMiddleware = () => {
    return log4js.connectLogger(HTTPLogger, {
        level: 'auto',
        format: (req, res, format) => {
            const logData = {
                IP_ADDRESS: format(`:remote-addr`),
                method: format(':method'),
                path: format(':url'),
                body: req.body,
                method: format(':status'),
            };
            return format(`${JSON.stringify(logData, null,2)}`);
        }
    });
};

module.exports = apiLoggerMiddleware;