'use strict';

/**
 * Import services
 */
const {
    jokeService,
} = require('../../src/services');

/**
 * User login API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const randomJoke = (req, res, next) => {
    try {
        const data = jokeService.getRandomJoke();

        return res.send({
            data,
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    randomJoke,
};