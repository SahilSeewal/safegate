// https://www.terlici.com/2014/09/29/express-router.html
const express = require('express');
const router  = express.Router();

// Index
router.get('/', function(req, res) {
  res.render('pages/index')
})

// Require all routes in the controllers/guest/ directory
router.use('/guest', require('./guest/guest'))
router.use('/resident', require('./resident/resident'))

module.exports = router;
