// https://www.terlici.com/2014/09/29/express-router.html
const express = require('express');
const router  = express.Router();

// Require Controller
const indexController = require('../controllers/index');

// Index
router.get('/', indexController.index);
router.get('/amILoggedIn', indexController.amILoggedIn);
router.get('/logout', indexController.getLogout);

// Require all routes in the routes/<subdir>/ directory
router.use('/guest', require('./guest/guest'));
router.use('/resident', require('./resident/resident'));

module.exports = router;
