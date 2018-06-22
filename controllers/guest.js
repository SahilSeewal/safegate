const express = require('express');
const router  = express.Router();

router.get('/signup', function(req, res) {
  res.send('URL should be http://localhost:3000/guest/signup')
})

module.exports = router;
