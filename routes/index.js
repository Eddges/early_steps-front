var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

router.get('/schedule', function(req, res, next) {
  res.render('schedule', { title: 'Express' });
});

router.get('/videos', function(req, res, next) {
  res.render('videos', { title: 'Express' });
});


module.exports = router;
