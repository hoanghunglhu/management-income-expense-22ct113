const Income = require('../models/Income');

exports.createIncome = async (req, res) => {
  try {
    const { amount, category, description, userId, date } = req.body;

    if (!amount || !category || !description || !userId) {
      return res.status(400).json({ message: "Vui lòng cung cấp đầy đủ thông tin." });
    }

    const newIncome = new Income({
      amount,
      category,
      description,
      userId,
      date: date || Date.now()
    });

    await newIncome.save();

    res.status(201).json({ message: "Thu nhập mới đã được tạo thành công.", income: newIncome });
  } catch (error) {
    console.error("Lỗi khi tạo thu nhập:", error.message);
    res.status(500).json({ message: "Đã xảy ra lỗi khi tạo thu nhập." });
  }
};

exports.updateIncomeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, category, description, date } = req.body;

    if (!amount || !category || !description || !date) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng nhập đầy đủ thông tin'
      });
    }

    const updatedIncome = await Income.findByIdAndUpdate(
      id,
      { amount, category, description, date },
      { new: true, runValidators: true }
    );

    if (!updatedIncome) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy thu nhập khớp với ID'
      });
    }

    res.status(200).json({
      success: true,
      data: updatedIncome
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi cập nhật thu nhập',
      error: error.message
    });
  }
};
// Get all incomes
exports.getIncomes = async (req, res) => {
  try {
    const { userId } = req.query;
    
    // Validate userId
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'UserId is required'
      });
    }

    // Get all incomes for the user
    const incomes = await Income.find({ userId })
      .sort({ date: -1 }); // Sort by date in descending order

    res.status(200).json({
      success: true,
      data: incomes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching incomes',
      error: error.message
    });
  }
};

// Filter incomes by name
exports.filterIncomeByName = async (req, res) => {
  try {
    const { userId, name } = req.query;

    // Validate userId and name
    if (!userId || !name) {
      return res.status(400).json({
        success: false,
        message: 'UserId and name are required'
      });
    }

    // Filter incomes by name for the user
    const incomes = await Income.find({
      userId,
      description: { $regex: name, $options: 'i' } // Case-insensitive search
    }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      data: incomes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error filtering incomes by name',
      error: error.message
    });
  }
};