'use strict';

/**
 * Import modules
 */
const {
    Router,
} = require('express');

const {
    userController,
} = require('../../src/controllers');
const {
    apiAuthMiddleware,
} = require('../../src/middleware');

const userRouter = new Router();

userRouter.post('/login', userController.userLogin);
userRouter.post('/signup', userController.userSignup);

userRouter.use(apiAuthMiddleware);
userRouter.post('/logout', userController.userLogout);
userRouter.get('/me', userController.userProfile);

module.exports = userRouter;