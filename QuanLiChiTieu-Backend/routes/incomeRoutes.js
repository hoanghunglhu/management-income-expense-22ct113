const express = require('express');
const { deleteIncomeById } = require('../controllers/incomeController');
const router = express.Router();

router.delete('/:id', deleteIncomeById);

module.exports = router;
