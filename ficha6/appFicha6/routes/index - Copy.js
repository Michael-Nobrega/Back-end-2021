var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Uma 2020/2021',
                                      test: 'This is a test' });
});

module.exports = router;
