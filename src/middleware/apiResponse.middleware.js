'use strict';

/**
 * Import module
 */
const mung = require('express-mung');
/**
 * Import constants
 */
const {
    API_SUCCESS,
} = require('../../src/constants/successMessages.constants');

/**
 * API response middleware function
 * @param {*} body 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const apiResponseMiddleware = (body, req, res) => {

    const apiResponse = {
        error: false,
        message: body.message || API_SUCCESS,
        data: body.data || {}
    };
    return apiResponse;
};

module.exports = mung.json(apiResponseMiddleware);