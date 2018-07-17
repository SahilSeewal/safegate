const express = require('express');
const router  = express.Router();

// All request callbacks are handled in this controller file
const residentController = require('../../controllers/resident/resident');

// Route Protection
const routeAuth = require('../../middlewares/route-auth');

// Public Resident Routes
router.get('/signup', routeAuth.isNotUser, residentController.getSignup);
router.post('/signup', routeAuth.isNotUser, residentController.postSignup);
router.get('/login', routeAuth.isNotUser, residentController.getLogin);
router.post('/login', routeAuth.isNotUser, residentController.postLogin);

// Protected Resident Routes
router.get('/', routeAuth.isResident, residentController.index);
router.get('/user', routeAuth.isResident, residentController.getUser);

// TODO: This route is unprotected, "Can't set headers after they are sent"
router.get('/logout', residentController.getLogout);

module.exports = router;
