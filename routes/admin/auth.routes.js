const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const resetController = require('../controllers/reset.controller');


// Register a new user
router.post('/register', authController.register);

// Login with existing user
router.post('/login', authController.login);

// Send reset code to user's email
router.post('/reset-code', resetController.sendResetCode);

// Reset user's password with the code
router.post('/reset-password', resetController.resetPassword);

//get user by email
router.get('/getUserId/:email', authController.getUserIdByEmail);

module.exports = router;
