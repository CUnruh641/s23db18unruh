var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shaker', { title: 'Search Results Shaker' });
});

module.exports = router;
