const express = require('express');

const routes = express.Router();
const job = require('./job');

routes.use('/job', job);

module.exports = routes;
