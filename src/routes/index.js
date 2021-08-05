'use strict';

/**
 * Import modules
 */
const {
    Router,
} = require('express');

const router = new Router();

const userRoutes = require('../../src/routes/user.routes');
const jokeRoutes = require('../../src/routes/joke.routes');;

router.use('/users', userRoutes);
router.use('/jokes', jokeRoutes);

module.exports = router;