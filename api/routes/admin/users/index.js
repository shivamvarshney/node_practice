var users = require('express').Router();
var usersObj = require('./users-controller/users-controller');
// api/products
users.get('/', usersObj.usersList);
// api/users/:id
users.get('/:id', usersObj.user);

module.exports = users;