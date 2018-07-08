const express = require('express');
const router  = express.Router();

// All request callbacks are handled in this controller file
const guestController = require('../../controllers/guest/guest');

// Public Guest Routes:
router.get('/signup', guestController.getSignup);
router.post('/signup', guestController.postSignup);
router.get('/login', guestController.getLogin);
router.post('/login', guestController.postLogin);

// Protected Guest Routes:
router.get('/', guestController.index);
router.get('/user', guestController.getUser);
router.get('/logout', guestController.getLogout);


module.exports = router;
