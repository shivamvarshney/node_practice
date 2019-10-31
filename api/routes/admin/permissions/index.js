const express = require('express');
const router = express.Router();
router.get('/', function(req, res) {
  res.json({ permissions: [] });
});
router.get('/:id', function(req, res) {
  res.json({ id: req.params.id });
});
module.exports = router;