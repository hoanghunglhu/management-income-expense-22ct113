const express = require('express');
const router = express.Router();
const { getIncomes, deleteIncome } = require('../controllers/incomeController');

// GET /api/incomes
router.get('/', getIncomes);

// DELETE /api/incomes/:id
router.delete('/:id', deleteIncome);

module.exports = router;
