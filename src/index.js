'use strict';

/**
 * Import module
 */
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = new express();
const server = http.createServer(app);

const {
    appLogger,
} = require('../src/helpers/logger');
const {
    env,
    port,
} = require('../config');
const {
    apiLoggerMiddleware,
    apiNotFoundMiddleware,
    apiResponseMiddleware,
    errorHandlerMiddleware,
} = require('./middleware');
const routes = require('./routes');

/**
 * Set app middleware
 */
app.use(apiResponseMiddleware)
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({
        extended: true
    }))
    .use(apiLoggerMiddleware)
    .use(routes)
    .use(apiNotFoundMiddleware)
    .use(errorHandlerMiddleware)

server.listen(port, () => {
    appLogger.info(`Unitask server listening on ${port} in ${env} mode`)
});