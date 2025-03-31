const Expense = require("../models/expenses");
// Lấy danh sách tất cả các expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find(); // Lấy tất cả các expenses từ DB
    res.status(200).json(expenses); // Trả về danh sách expenses dưới dạng JSON
  } catch (error) {
    res.status(500).json({ error: error.message }); // Xử lý lỗi
  }
};