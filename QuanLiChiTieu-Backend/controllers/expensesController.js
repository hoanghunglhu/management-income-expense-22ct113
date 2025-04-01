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

// Cập nhật expense theo ID
exports.updateExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the update operation
    });

    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: "Error updating expense", error: error.message });
  }
};
// Xóa expense theo ID
exports.deleteExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error: error.message });
  }
};