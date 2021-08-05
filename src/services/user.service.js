'use strict';

/**
 * Import modules
 */
const md5 = require('md5');
/**
 * Import models
 */
const {
    userModel,
} = require('../../src/models');
/**
 * Import constants
 */
const {
    USER_ALREADY_EXISTS,
    USER_NOT_FOUND,
    PASSWORD_NOT_MATCH,
} = require('../../src/constants/errorMessages.constants');
const {
    generateUserToken,
} = require('../../src/helpers/jwt');

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
 * Find one user service
 * @param {*} condition 
 * @param {*} projection 
 * @returns 
 */
const updateOneUser = async (condition, updateData) => {
    return userModel.findOneAndUpdate(condition, updateData, {
        new: true
    });
};

/**
 * User signup service
 * @param {*} body 
 * @returns 
 */
const userSignup = async (body) => {
    const {
        firstName,
        lastName,
        email,
        password,
    } = body;

    const userQuery = {
        email,
    };
    const user = await findOneUser(userQuery);

    if (user) {
        throw new Error(USER_ALREADY_EXISTS);
    }

    const userDetails = {
        firstName,
        lastName,
        email,
        password: md5(password),
    };

    await insertOneUser(userDetails);
    return {};
};

/**
 * User login service
 * @param {*} body 
 * @returns 
 */
const userLogin = async (body) => {
    const {
        email,
        password,
    } = body;

    const userQuery = {
        email,
    };
    const user = await findOneUser(userQuery);

    if (!user) {
        throw new Error(USER_NOT_FOUND);
    }

    if (md5(password) !== user.password) {
        throw new Error(PASSWORD_NOT_MATCH);
    }

    const userUpdate = {
        token: generateUserToken(user._id.toString())
    };
    const {
        token,
    } = await updateOneUser(userQuery, userUpdate);
    return token;
};

/**
 * User logout service
 * @param {*} body 
 * @returns 
 */
const userLogout = async (_userId) => {
    const userQuery = {
        _id: _userId,
    };
    const userUpdate = {
        token: null
    };
    await updateOneUser(userQuery, userUpdate);
    return {};
};

/**
 * User profile service
 * @param {*} body 
 * @returns 
 */
const userProfile = async (_userId) => {
    const userQuery = {
        _id: _userId,
    };
    const userFields = {
        firstName: 1,
        lastName: 1,
        email: 1
    };
    const user = await findOneUser(userQuery, userFields);
    return user;
};

module.exports = {
    findOneUser,
    insertOneUser,
    updateOneUser,
    userSignup,
    userLogin,
    userLogout,
    userProfile
};