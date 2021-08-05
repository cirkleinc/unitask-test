'use strict';

/**
 * Import module
 */
const Joi = require('joi');

/**
 * User login schema
 */
const userLoginSchema = Joi.object().keys({
    email: Joi.string()
        .min(3)
        .max(50)
        .email()
        .required(),
    password: Joi.string()
        .min(6)
        .required()
});

/**
 * User signup schema
 */
const userSignupSchema = Joi.object().keys({
    firstName: Joi.string()
        .min(3)
        .max(50)
        .required(),
    lastName: Joi.string()
        .min(3)
        .max(50)
        .required(),
    email: Joi.string()
        .min(3)
        .max(50)
        .email()
        .required(),
    password: Joi.string()
        .min(6)
        .required()
});

module.exports = {
    userLoginSchema,
    userSignupSchema,
};