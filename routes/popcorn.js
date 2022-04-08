var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('popcorn', { title: 'Search Results Popcorn' });
});

module.exports = router;
