const routes = require('express').Router();
routes.use('/permissions', require('./permissions'));
routes.use('/users', require('./users'));
module.exports = routes;