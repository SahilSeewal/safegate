const express = require('express');
const router  = express.Router();

// All request callbacks are handled in this controller file
const guestController = require('../../controllers/guest/guest');

router.get('/', guestController.index);

router.get('/signup', guestController.getSignup);
router.post('/signup', guestController.postSignup);

router.get('/login', guestController.getLogin);
router.post('/login', guestController.postLogin);

router.get('/logout', guestController.getLogout);

module.exports = router;
