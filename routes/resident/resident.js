const express = require('express');
const router  = express.Router();

// All request callbacks are handled in this controller file
const residentController = require('../../controllers/resident/resident');

// Route Protection
const ensureUser = require('../../middlewares/routeAuthentication');

// Public Resident Routes
router.get('/signup', ensureUser.isNotLoggedIn, residentController.getSignup);
router.post('/signup', ensureUser.isNotLoggedIn, residentController.postSignup);
router.get('/login', ensureUser.isNotLoggedIn, residentController.getLogin);
router.post('/login', ensureUser.isNotLoggedIn, residentController.postLogin);

// Protected Resident Routes
router.get('/', ensureUser.isResident, residentController.index);
router.get('/user', ensureUser.isResident, residentController.getUser);

module.exports = router;
