const express = require('express');
const router = express.Router();
const {
    register,
    login,
    getMe,
    forgotPassword,
    resetPassword,
    updatePassword
} = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.put('/updatepassword', protect, updatePassword);

module.exports = router; 