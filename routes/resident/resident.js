const express = require('express');
const router  = express.Router();
const residentController = require('../../controllers/resident/resident')

router.get('/', residentController.index);
router.get('/signup', residentController.signup);
router.post('/register', residentController.register);

module.exports = router;
