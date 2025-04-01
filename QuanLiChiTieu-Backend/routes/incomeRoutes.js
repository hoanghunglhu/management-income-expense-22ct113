const express = require('express');
const router = express.Router();
const { getIncomes, filterIncomeByName } = require('../controllers/incomeController');


router.post('/incomes', createIncome);
router.put('/:id', updateIncomeById);
// GET /api/incomes
router.get('/', getIncomes);
router.get('/filter', filterIncomeByName);

module.exports = router;