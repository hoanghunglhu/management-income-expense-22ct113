const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Expense", expenseSchema); 