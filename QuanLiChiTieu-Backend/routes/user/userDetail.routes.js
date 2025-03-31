const express = require('express');
const { protect } = require('../../middleware/auth'); 
const { getUserDetail } = require('../../controllers/user/userDetail.controller');

const router = express.Router();
router.get('/:id', protect, getUserDetail);
module.exports = router;