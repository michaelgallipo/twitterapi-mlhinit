const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');
// const bodyParser = require('body-parser');
const app = express();
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);


module.exports = app;