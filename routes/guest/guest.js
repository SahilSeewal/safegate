const express = require('express');
const router  = express.Router();

// All request callbacks are handled in this controller file
const guestController = require('../../controllers/guest/guest');

// Route Protection
const routeAuth = require('../../middlewares/route-auth');

// Public Guest Routes:
router.get('/signup', routeAuth.isNotUser, guestController.getSignup);
router.post('/signup', routeAuth.isNotUser, guestController.postSignup);
router.get('/login', routeAuth.isNotUser, guestController.getLogin);
router.post('/login', routeAuth.isNotUser, guestController.postLogin);

// Protected Guest Routes:
router.get('/', routeAuth.isGuest, guestController.index);
router.get('/user', routeAuth.isGuest, guestController.getUser);

module.exports = router;
