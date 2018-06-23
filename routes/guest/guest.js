const express = require('express');
const router  = express.Router();

router.get('/', function(req, res) {
  res.send('Guest Dashboard')
})

router.get('/signup', function(req, res) {
  res.render('pages/guest/signup')
})

router.post('/register', function(req, res) {
  res.send('Guest Registered!')
})

module.exports = router;
