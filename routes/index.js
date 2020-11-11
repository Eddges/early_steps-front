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

// router.get('/videos', function(req, res, next) {
//   res.render('videos', { title: 'Express' });
// });

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

router.get('/profileothers', function(req, res, next) {
  res.render('profileothers', { title: 'Express' });
});

router.get('/leaderboard', function(req, res, next) {
  res.render('leaderboard', { title: 'Express' });
});
router.get('/challenges', function(req, res, next) {
  res.render('challenges', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/profileothers', function(req, res, next) {
  res.render('profileothers', { title: 'Express' });
});
router.get('/studymaterials', function(req, res, next) {
  res.render('studymaterials', { title: 'Express' });
});
router.get('/studymaterials_dashboard', function(req, res, next) {
  res.render('studymaterials_dashboard', { title: 'Express' });
});
router.get('/videoquiz', function(req, res, next) {
  res.render('videoQuiz', { title: 'Express' });
});
router.get('/assignments', function(req, res, next) {
  res.render('assignments', { title: 'Express' });
});

router.get('/forgotpassword', function(req, res, next) {
  res.render('forgotpassword', { title: 'Express' });
});
module.exports = router;
