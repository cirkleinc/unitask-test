module.exports = {
    apiAuthMiddleware: require('./apiAuth.middleware'),
    apiLoggerMiddleware: require('./apiLogger.middleware'),
    apiNotFoundMiddleware: require('./apiNotFound.middleware'),
    apiResponseMiddleware: require('./apiResponse.middleware'),
    errorHandlerMiddleware: require('./errorHandler.middleware')
};