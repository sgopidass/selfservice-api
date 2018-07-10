/* created by sgopidass */
const swaggerTools = require('swagger-tools');
const config = require('./../config/default');
const swaggerDoc = require('./../swagger.json');
const logger = require('./../lib/logger');

module.exports = function (app) {
  swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
    app.use(middleware.swaggerMetadata());
    logger.info('Loaded middleware: swaggerMetadata');

    app.use(middleware.swaggerValidator());
    logger.info('Loaded middleware: swaggerValidator');

    app.use(middleware.swaggerRouter({ controllers: './api/controllers' }));
    logger.info('Loaded middleware: swaggerRouter');

    app.use(middleware.swaggerUi()); // Swagger documents and Swagger UI
    logger.info('Loaded middleware: swaggerUI');

    logger.info(`Service started on ${config.server.port}`);
    logger.info(`API Documentation available at http://${config.server.host}:${config.server.port}/docs`);
  });
};
