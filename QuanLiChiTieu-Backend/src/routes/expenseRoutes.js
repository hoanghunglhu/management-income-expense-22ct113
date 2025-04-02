const express = require("express");
const { getAllExpenses, createExpense } = require("../controllers/expensesController");

const router = express.Router();

router.get("/", getAllExpenses);
router.post("/", createExpense);

module.exports = router; 