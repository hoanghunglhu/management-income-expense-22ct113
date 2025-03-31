const express = require("express");
const { filterExpensesByName } = require("../controllers/expenseController");

const router = express.Router();

router.get("/expenses", filterExpensesByName);

module.exports = router;
