'use strict';

/**
 * Import module
 */
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(apiLoggerMiddleware());
app.use(apiResponseMiddleware);
app.use('/api', routes);
app.use(apiNotFoundMiddleware);
app.use(errorHandlerMiddleware);

/**
 * Mongodb Connection
 */
require('./include/db.connection');

/**
 * Server listen on port
 */
server.listen(port, () => {
    appLogger.info(`Unitask server listening on ${port} in ${env} mode`)
});