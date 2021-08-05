'use strict';

/**
 * Imports module
 */
const mongoose = require('mongoose');
/**
 * Import config
 */
const {
    mongo,
} = require('../../config');
/**
 * Import logger
 */
const {
    appLogger,
} = require('../helpers/logger');
/**
 * Mongodb connection url
 */
const mongodbConnectionUrl = (mongo.username && mongo.password) ?
    `mongodb://${mongo.username}:${mongo.password}@${mongo.host}:${mongo.port}/${mongo.dbName}` :
    `mongodb://${mongo.host}:${mongo.port}/${mongo.dbName}`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.connect(mongodbConnectionUrl, options).then(() => {
    appLogger.info(`Mongodb connection done`);
}).catch((err) => {
    appLogger.error(`Mongodb error`, err);
    process.exit(1);
});