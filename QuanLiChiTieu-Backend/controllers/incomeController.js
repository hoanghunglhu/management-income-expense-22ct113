const Income = require('../models/Income');

async function deleteIncomeById(req, res) {
    try {
        const { id } = req.params;
        const deletedIncome = await Income.findByIdAndDelete(id);
        
        if (!deletedIncome) {
            return res.status(404).json({ message: 'Income không tồn tại' });
        }

        res.json({ success: true, message: 'Income đã bị xóa', income: deletedIncome });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { deleteIncomeById };