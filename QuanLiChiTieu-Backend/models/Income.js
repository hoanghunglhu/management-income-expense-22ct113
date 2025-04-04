const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Liên kết với User
    amount: { type: Number, required: true }, // Số tiền thu nhập
    source: { type: String, required: true }, // Nguồn thu nhập (lương, thưởng, đầu tư...)
    date: { type: Date, default: Date.now }, // Ngày nhận thu nhập
}, { timestamps: true });

module.exports = mongoose.model('Income', IncomeSchema);
