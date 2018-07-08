const express = require('express');
const router  = express.Router();

// All request callbacks are handled in this controller file
const guestController = require('../../controllers/guest/guest');

// Route Protection
const authenticateRoutes = require('../../middlewares/guest-authorization');

// Public Guest Routes:
router.get('/signup', guestController.getSignup);
router.post('/signup', guestController.postSignup);
router.get('/login', guestController.getLogin);
router.post('/login', guestController.postLogin);

// Protected Guest Routes:
router.get('/'
  , authenticateRoutes.redirectUserIfNotLoggedIn
  , guestController.index
);
router.get('/user'
  , authenticateRoutes.redirectUserIfNotLoggedIn
  , guestController.getUser
);

// TODO: This route is unprotected, "Can't set headers after they are sent"
router.get('/logout', guestController.getLogout);


module.exports = router;
