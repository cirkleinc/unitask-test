'use strict';

/**
 * Import models
 */
const {
    userModel,
} = require('../../src/models');

/**
 * Find one user service
 * @param {*} condition 
 * @param {*} projection 
 * @returns 
 */
const findOneUser = async (condition, projection = {}) => {
    return userModel.findOne(condition, projection);
};

/**
 * Insert one user service
 * @param {*} data 
 * @returns 
 */
const insertOneUser = async (data) => {
    const userData = new userModel(data);
    return userData.save();
};

/**
 * User signup service
 * @param {*} body 
 * @returns 
 */
const userSignup = async (body) => {
    return {};
};

/**
 * User login service
 * @param {*} body 
 * @returns 
 */
const userLogin = async (body) => {
    return {};
};

/**
 * User logout service
 * @param {*} body 
 * @returns 
 */
const userLogout = async (_userId) => {
    return {};
};

/**
 * User profile service
 * @param {*} body 
 * @returns 
 */
const userProfile = async (_userId) => {
    return {};
};

module.exports = {
    findOneUser,
    insertOneUser,
    userSignup,
    userLogin,
    userLogout,
    userProfile
};