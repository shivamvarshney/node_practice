var permissions = require('express').Router();
// api/products
permissions.get('/', function (req, res) {
  res.send({ products: [] });
});
// api/products/:id
permissions.get('/:id', function (req, res) {
  res.send({ id: req.params.id });
});

module.exports = permissions;