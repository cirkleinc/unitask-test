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

/**
 * Decode user api token
 * @param {*} token 
 * @returns 
 */
const decodeUserToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, jwtSecret);

        return decodedToken;
    } catch (error) {
        throw error;
    }
};

/**
 * Generate user api token
 * @param {*} _userId 
 * @returns 
 */
const generateUserToken = (_userId) => {
    try {
        const generateToken = jwt.sign({
            _userId
        }, jwtSecret);

        return generateToken;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    decodeUserToken,
    generateUserToken,
};