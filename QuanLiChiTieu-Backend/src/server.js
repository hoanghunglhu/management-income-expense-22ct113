const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("../config/db");
const userRoutes = require('./routes/userRoutes');

// Kết nối MongoDB trước khi chạy server
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route mặc định
app.get("/", (req, res) => {
    res.send("API QuanLiChiTieu đang chạy...");
});

app.use('/api/users', userRoutes);

// Khởi chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
