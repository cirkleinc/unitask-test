/**
 * Load env variable
 */
require('dotenv').config();

/**
 * Imports module
 */
const Joi = require('joi');

/**
 * Env variable validation schema
 */
const envVarsSchema = Joi.object({
        NODE_ENV: Joi.string()
            .allow('local', 'dev', 'prod')
            .default('local'),
        PORT: Joi.number().default(3000),
        BASE_URL: Joi.string().default('http://localhost:3000'),
        DB_HOST: Joi.string().default('localhost'),
        DB_NAME: Joi.string().default('unitask-test'),
        DB_PORT: Joi.number().default(27017),
        DB_USERNAME: Joi.string().default(''),
        DB_PASSWORD: Joi.string().default(''),
        JWT_SECRET: Joi.string().default('unitask-test-jwt'),
        HTTP_LOG_LEVEL: Joi.string().default('debug'),
        APP_LOG_LEVEL: Joi.string().default('debug'),
    })
    .unknown()
    .required();

/**
 * Validate env variable
 */
const {
    error,
    value: envVars
} = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`Error :: Config validation error :: ${error.message}`);
}

/**
 * Config object
 */
const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    baseUrl: envVars.BASE_URL,
    jwtSecret: envVars.JWT_SECRET,
    mongo: {
        host: envVars.DB_HOST,
        dbName: envVars.DB_NAME,
        port: envVars.DB_PORT,
        username: envVars.DB_USERNAME,
        password: envVars.DB_PASSWORD
    },
    logLevels: {
        http: envVars.HTTP_LOG_LEVEL,
        app: envVars.APP_LOG_LEVEL
    }
};

/**
 * Exports config
 */
module.exports = config;