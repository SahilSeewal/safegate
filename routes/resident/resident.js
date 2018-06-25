const express = require('express');
const router  = express.Router();
const residentController = require('../../controllers/resident/resident')

router.get('/', residentController.index);
router.get('/signup', residentController.getSignup);
router.post('/signup', residentController.postSignup);

module.exports = router;
