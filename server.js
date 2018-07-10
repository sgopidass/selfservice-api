/* created by sgopidass */
require('dotenv').config();
const express = require('express');
const config = require('./config/default');

const app = express();

require('./bootstrap/mongoose.js')();
require('./models/publishers')

require('./bootstrap/swagger.js')(app);
app.listen(config.server.port);

module.exports = app;
