const express = require('express');
const router = express.Router();
const { getIncomes } = require('../controllers/incomeController');

// GET /api/incomes
router.get('/', getIncomes);

module.exports = router; 