const express = require("express");
const { filterExpensesByName, createExpense } = require("../controllers/expenseController");

const router = express.Router();

router.get("/expenses", filterExpensesByName);
router.get("/expenses", createExpense);

module.exports = router;
