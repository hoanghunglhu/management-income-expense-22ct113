const Income = require('../models/Income');

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