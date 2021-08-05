'use strict';

/**
 * Import modules
 */
const axios = require('axios');

/**
 * Get random joke service
 * @returns 
 */
const getRandomJoke = async () => {
    const options = {
        method: 'GET',
        url: `https://api.chucknorris.io/jokes/random`,
        data: {}
    };

    const {
        data,
    } = await axios(options);
    return data;
};

module.exports = {
    getRandomJoke,
};