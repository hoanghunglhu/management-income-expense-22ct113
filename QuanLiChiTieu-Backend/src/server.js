const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("../config/db");

// Import routes here
const expenseRoutes = require("./routes/expensesRoutes");

// Kết nối MongoDB trước khi chạy server
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Thêm route cho API 
app.use("/api", expenseRoutes);

// Route mặc định
app.get("/", (req, res) => {
    res.send("API QuanLiChiTieu đang chạy...");
});

// Khởi chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
