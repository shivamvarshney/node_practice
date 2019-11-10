const routes = require('express').Router();
routes.use('/admin', require('./admin'));
module.exports = routes;