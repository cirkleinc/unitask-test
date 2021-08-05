'use strict';

/**
 * Import module
 */
const jwt = require('jsonwebtoken');
/**
 * Import config
 */
const {
    jwtSecret,
} = require('../../../config');

const decodeUserToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, jwtSecret);

        return decodedToken;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    decodeUserToken,
};