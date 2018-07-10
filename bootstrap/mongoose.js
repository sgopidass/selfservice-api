/* created by sgopidass */
const mongoose = require('mongoose');
const logger = require('./../lib/logger');

module.exports = function () {

  mongoose.connect('mongodb://localhost/publishers');
  mongoose.Promise = global.Promise;
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    logger.info('Connected to Mongo');
  });
};
