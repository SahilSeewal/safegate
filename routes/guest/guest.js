const express = require('express');
const router  = express.Router();

// All request callbacks are handled in this controller file
const guestController = require('../../controllers/guest/guest');

router.get('/', guestController.index);
router.get('/signup', guestController.signup);
router.post('/register', guestController.register);

module.exports = router;
