var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { youtubeUrl: 'https://www.youtube.com/embed/oTOsKjh0zBc' });
});

module.exports = router;
