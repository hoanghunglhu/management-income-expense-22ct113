const express = require("express");
const { filterExpensesByName ,updateExpenseById,deleteExpenseById} = require("../controllers/expenseController");

const router = express.Router();

router.get("/expenses", filterExpensesByName);
router.get("/expenses", updateExpenseById);
router.get("/expenses",deleteExpenseById);
module.exports = router;
