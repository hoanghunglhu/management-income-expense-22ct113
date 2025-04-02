const express = require('express');
const { getUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/users', getUsers);
router.post('/', createUser);

module.exports = router;