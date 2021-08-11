const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');
// const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(cors());

module.exports = app;