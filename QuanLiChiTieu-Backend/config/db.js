const mongoose = require("mongoose");
require("dotenv").config(); // Đọc biến môi trường từ file .env

// Chọn loại kết nối (Local & Cloud)
const MONGO_URI = process.env.MONGO_URI_CLOUD || process.env.MONGO_URI_LOCAL;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`✅ Kết nối MongoDB thành công: ${MONGO_URI.includes('localhost') ? 'Local' : 'Cloud'}`);
    } catch (error) {
        console.error("❌ Lỗi kết nối MongoDB:", error.message);
        process.exit(1); // Dừng nếu kết nối fail
    }
};

module.exports = connectDB;
