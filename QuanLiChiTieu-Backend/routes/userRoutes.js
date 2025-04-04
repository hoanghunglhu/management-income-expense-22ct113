const express = require('express');
const { deleteUserById  } = require('../controllers/userController');
const router = express.Router();

router.delete('/:id', deleteUserById);

module.exports = router;