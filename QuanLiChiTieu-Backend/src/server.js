const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("../config/db");

// Kết nối MongoDB khi chạy server
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route mặc định
app.get("/", (req, res) => {
    res.send("API QuanLiChiTieu đang chạy...");
});

// ---------- [7.11] Kết nối route cho API get user detail ----------
const userDetailRoutes = require("../routes/user/userDetail.routes");
app.use("/api/users", userDetailRoutes); // Sử dụng tiền tố /api/users

// Khởi chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
