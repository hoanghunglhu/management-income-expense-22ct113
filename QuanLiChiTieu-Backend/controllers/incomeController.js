const Income = require('../models/Income');

async function getListIncome(req, res) {
    try {
        const incomes = await Income.find({ userId: req.user.id }).sort({ date: -1 });
        res.json({ success: true, incomes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { getListIncome };