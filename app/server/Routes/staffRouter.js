const express = require('express');
const auth = require('../Middlewares/auth');
const staffController = require('../Controllers/staffController');
const { signup, login } = staffController;

const router = express.Router();

router.post('/auth/signup', auth.saveStaffMember, signup);
router.post('/auth/login', login);

module.exports = router;