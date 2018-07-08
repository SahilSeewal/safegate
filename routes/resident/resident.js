const express = require('express');
const router  = express.Router();

// All request callbacks are handled in this controller file
const residentController = require('../../controllers/resident/resident')

// Public Resident Routes
router.get('/signup', residentController.getSignup);
router.post('/signup', residentController.postSignup);
router.get('/login', residentController.getLogin);
router.post('/login', residentController.postLogin);

// Protected Resident Routes
router.get('/', residentController.index);
router.get('/user', residentController.getUser);
router.get('/logout', residentController.getLogout);

module.exports = router;
