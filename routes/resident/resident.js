const express = require('express');
const router  = express.Router();

// All request callbacks are handled in this controller file
const residentController = require('../../controllers/resident/resident');

// Route Protection
const authenticateRoutes = require('../../middlewares/guest-authorization');

// Public Resident Routes
router.get('/signup', residentController.getSignup);
router.post('/signup', residentController.postSignup);
router.get('/login', residentController.getLogin);
router.post('/login', residentController.postLogin);

// Protected Resident Routes
router.get('/'
  , authenticateRoutes.redirectUserIfNotLoggedIn
  , residentController.index
);
router.get('/user'
  , authenticateRoutes.redirectUserIfNotLoggedIn
  , residentController.getUser
);

// TODO: This route is unprotected, "Can't set headers after they are sent"
router.get('/logout', residentController.getLogout);

module.exports = router;
