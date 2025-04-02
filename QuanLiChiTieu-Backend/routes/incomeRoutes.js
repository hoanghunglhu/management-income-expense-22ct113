const express = require('express');
const router = express.Router();
const { createIncome, updateIncomeById, getIncomes, filterIncomeByName } = require('../controllers/incomeController');


// POST /api/incomes - Tạo thu nhập mới
router.post('/', createIncome);

// PUT /api/incomes/:id - Cập nhật thu nhập theo ID
router.put('/:id', updateIncomeById);


// GET /api/incomes
router.get('/', getIncomes);

// GET /api/incomes/filter - Lọc thu nhập theo tên
router.get('/filter', filterIncomeByName);

module.exports = router;