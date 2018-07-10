

const { transports, createLogger, format } = require('winston');

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.json(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'swaggerDemo.log', level: 'info' }),
  ],
});

module.exports = logger;
