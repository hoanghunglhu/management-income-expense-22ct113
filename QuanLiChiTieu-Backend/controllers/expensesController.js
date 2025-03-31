const Expense = require("../models/expenses");

// Lấy danh sách expense theo name (nếu có)
exports.filterExpensesByName = async (req, res) => {
  try {
    const { name } = req.query;
    const query = name ? { name: { $regex: new RegExp(name, "i") } } : {};

    const expenses = await Expense.find(query);
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};