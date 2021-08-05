'use strict';

/**
 * Import services
 */
const {
    userService,
} = require('../../src/services');
const {
    userLoginSchema,
    userSignupSchema,
} = require('../../src/constants/joiSchemas.constants');

/**
 * User login API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const userLogin = async (req, res, next) => {
    try {
        const {
            error,
        } = userLoginSchema.validate(req.body);

        if (error && error !== null)
            throw new Error(error);

        const data = await userService.userLogin(req.body);

        return res.send({
            data,
        });
    } catch (error) {
        return next(error);
    }
};

/**
 * User signup API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const userSignup = async (req, res, next) => {
    try {
        const {
            error,
        } = userSignupSchema.validate(req.body);

        if (error && error !== null)
            throw new Error(error);

        const data = await userService.userSignup(req.body);

        return res.send({
            data,
        });
    } catch (error) {
        return next(error);
    }
};

/**
 * User logout API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const userLogout = async (req, res, next) => {
    try {
        const data = await userService.userLogout(req._userId);

        return res.send({
            data,
        });
    } catch (error) {
        return next(error);
    }
};

/**
 * User profile API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const userProfile = async (req, res, next) => {
    try {
        const data = await userService.userProfile(req._userId);

        return res.send({
            data,
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    userLogin,
    userSignup,
    userLogout,
    userProfile,
};