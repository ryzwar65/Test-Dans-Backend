const express = require('express');
const { get, getId, importAll, getSearch } = require('../controllers/jobController');

const routes = express.Router();

routes.post('/import', importAll);
routes.get('/', get);
routes.get('/search', getSearch);
routes.get('/:id', getId);

module.exports = routes;
