'use strict';

/**
 * Import JWT helper
 */
const {
    decodeUserToken,
} = require('../../src/helpers/jwt');
/**
 * Import constants
 */
const {
    HTTP_STATUS_CODES,
} = require('../../src/constants/statusCodes.constants');
const {
    UNAUTHORIZED_CLIENT,
} = require('../../src/constants/errorMessages.constants');
/**
 * Import services
 */
const {
    findOneUser,
} = require('../../src/services/user.service');

/**
 * API auth middleware function
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const apiAuthMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization || false;
        if (token) {
            const decodedToken = await decodeUserToken(token);
            const _userId = decodedToken._userId || false;

            if (_userId) {
                const user = await findOneUser(_userId);

                if (user) {
                    req._userId = _userId;
                    return next();
                }
            }
        }

        const apiResponse = {
            error: true,
            message: UNAUTHORIZED_CLIENT,
            data: {}
        };
        return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).send(apiResponse);
    } catch (error) {

        const apiResponse = {
            error: true,
            message: UNAUTHORIZED_CLIENT,
            data: {}
        };
        return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).send(apiResponse);
    }
};

module.exports = apiAuthMiddleware;