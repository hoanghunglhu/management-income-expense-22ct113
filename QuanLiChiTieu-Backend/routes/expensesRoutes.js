const express = require("express");
const { getAllExpenses } = require("../controllers/expenseController");

const router = express.Router();

router.get("/expenses", getAllExpenses);

module.exports = router;
