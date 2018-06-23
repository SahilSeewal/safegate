const express = require('express');
const router  = express.Router();

router.get('/', function(req, res) {
  res.send('Resident Dashboard')
})

router.get('/signup', function(req, res) {
  res.render('pages/resident/signup')
})

router.post('/register', function(req, res) {
  res.send('Resident Registered!')
})

module.exports = router;
