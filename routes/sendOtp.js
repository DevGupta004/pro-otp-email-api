// routes/sendOtp.js
const express = require('express');
const sgMail = require('@sendgrid/mail');
const { sendGridApiKey } = require('../config');
const router = express.Router();

sgMail.setApiKey(sendGridApiKey);

router.post('/', (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);

    const msg = {
        to: req.body.email,
        from: 'er.devgupta007@gmail.com',
        subject: 'Verify Your Email for Pro Focus App',
        text: `Your OTP is : ${otp}`
    };

    sgMail.send(msg)
        .then(() => {
            res.status(200).json({
                message: 'OTP sent successfully',
                email: req.body.email,
                OTP: otp
            });
        })
        .catch(error => {
            res.status(500).json({
                message: error.toString()
            });
        });
});

module.exports = router;
