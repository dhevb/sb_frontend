const express = require('express');
const router = express.Router();
const { createUser, loginUser,ForgotPassword } = require('../controller/Auth');

// Route for creating a new user
router.post('/signup', createUser);

// Route for user login
router.post('/login', loginUser);
router.post('/forgot-password',ForgotPassword)
module.exports = router;
