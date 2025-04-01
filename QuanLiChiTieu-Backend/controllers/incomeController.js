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

// Delete income by ID
exports.deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Income ID is required'
      });
    }

    // Find and delete the income
    const income = await Income.findByIdAndDelete(id);
    
    // If income not found
    if (!income) {
      return res.status(404).json({
        success: false,
        message: 'Income not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Income deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting income',
      error: error.message
    });
  }
}; 