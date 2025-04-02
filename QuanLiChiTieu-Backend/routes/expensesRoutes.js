const express = require("express");
const { getAllExpenses, createExpense } = require("../controllers/expenseController");

const router = express.Router();

router.get("/expenses", getAllExpenses);
router.post("/expenses", createExpense);

module.exports = router;
