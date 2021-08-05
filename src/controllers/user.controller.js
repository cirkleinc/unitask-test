'use strict';

/**
 * Import services
 */
const {
    userService,
} = require('../../src/services');

/**
 * User login API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const userLogin = (req, res, next) => {
    try {
        console.log("userLogin :: ")
        const data = userService.userLogin(req.body);

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
const userSignup = (req, res, next) => {
    try {
        const data = userService.userSignup(req.body);

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
const userLogout = (req, res, next) => {
    try {
        const data = userService.userLogout(req._userId);

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
const userProfile = (req, res, next) => {
    try {
        const data = userService.userProfile(req._userId);

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