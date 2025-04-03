const express = require("express");
const { getAllExpenses, createExpense, filterExpensesByName, updateExpenseById } = require("../controllers/expenseController");

const router = express.Router();

router.get("/expenses", getAllExpenses);
router.post("/expenses", createExpense);
router.get("/expenses/filter", filterExpensesByName);
router.put("/expenses/:id", updateExpenseById);

module.exports = router;
