const app = require('express');
module.exports = function (app) {
    app.use('/api', require('./routes'))
}