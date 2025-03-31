const express = require("express");
const { filterExpensesByName ,updateExpenseById } = require("../controllers/expenseController");

const router = express.Router();

router.get("/expenses", filterExpensesByName);
router.get("/expenses", updateExpenseById);
module.exports = router;
