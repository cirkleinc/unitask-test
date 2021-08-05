'use strict';

/**
 * Import modules
 */
const {
    Router,
} = require('express');

const {
    jokeController,
} = require('../../src/controllers');
const {
    apiAuthMiddleware,
} = require('../../src/middleware');

const jokeRouter = new Router();

jokeRouter.use(apiAuthMiddleware);
jokeRouter.get('/random', jokeController.randomJoke);

module.exports = jokeRouter;