'use strict';

/**
 * Import constants
 */
const {
    HTTP_STATUS_CODES,
} = require('../../src/constants/statusCodes.constants');
const {
    API_NOT_FOUND,
} = require('../../src/constants/errorMessages.constants');

/**
 * API not found middleware function
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const apiNotFoundMiddleware = (req, res, next) => {
    const statusCode = HTTP_STATUS_CODES.NOT_FOUND;
    const err = new Error(API_NOT_FOUND);
    err.status = statusCode;

    next(err);
};

module.exports = apiNotFoundMiddleware;