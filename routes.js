// routes.js
const express = require('express');
const sendOtpRoute = require('./routes/sendOtp');

const router = express.Router();

// Routes
router.use('/send-otp', sendOtpRoute);

module.exports = router;
