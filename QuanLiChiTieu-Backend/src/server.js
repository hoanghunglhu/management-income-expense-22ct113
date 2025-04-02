const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("../config/db");
const bodyParser = require("body-parser");


// Import routes here
const expenseRoutes = require("./routes/expensesRoutes");

// Kết nối MongoDB trước khi chạy server
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Thêm route cho API 
app.use("/api", expenseRoutes);

// Route 
app.use("/api/users", require("../routes/userRoutes"));
app.use("/api/incomes", require("../routes/incomeRoutes"));

// Default route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Khởi chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
