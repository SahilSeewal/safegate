// https://www.terlici.com/2014/09/29/express-router.html

const express = require('express');
const router  = express.Router();

router.get('/', function(req, res) {
  res.render('pages/index')
})

module.exports = router;
