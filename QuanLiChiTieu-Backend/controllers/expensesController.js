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


const Expense = require("../models/Expense");

exports.createExpense = async (req, res) => {
  try {
    const { description, amount } = req.body;
    if (!description || !amount) {
      return res.status(400).json({ message: "Thiếu thông tin cần thiết" });
    }

    const newExpense = new Expense({ description, amount });
    await newExpense.save();

    res.status(201).json({ message: "Chi phí đã được tạo", data: newExpense });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};
