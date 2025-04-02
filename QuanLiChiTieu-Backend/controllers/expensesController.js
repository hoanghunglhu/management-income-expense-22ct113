const Expense = require("../models/expenses");
// Lấy danh sách tất cả các expenses với phân trang, sắp xếp và lọc
exports.getAllExpenses = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = 'date',
      sortOrder = 'desc',
      startDate,
      endDate,
      category
    } = req.query;

    // Xây dựng query
    const query = {};
    
    // Lọc theo khoảng thời gian nếu có
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    // Lọc theo category nếu có
    if (category) {
      query.category = category;
    }

    // Xây dựng options cho query
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: {
        [sortBy]: sortOrder === 'desc' ? -1 : 1
      }
    };

    // Thực hiện query với phân trang
    const expenses = await Expense.find(query, null, options);

    // Tính toán thông tin phân trang
    const total = await Expense.countDocuments(query);

    res.status(200).json({
      success: true,
      data: expenses,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching expenses',
      error: error.message
    });
  }
};

exports.createExpense = async (req, res) => {
  try {
    const { name, amount, category } = req.body;

    if (!name || !amount || !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, amount and category'
      });
    }

    const expense = await Expense.create({
      name,
      amount,
      category,
      date: new Date()
    });

    res.status(201).json({
      success: true,
      data: expense
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating expense',
      error: error.message
    });
  }
};