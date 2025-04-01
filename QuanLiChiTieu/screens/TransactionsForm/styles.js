// Transactions.js
import { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from "./TransactionStyles";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Gọi API để lấy danh sách giao dịch
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("https://api.example.com/transactions");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Lỗi khi lấy giao dịch:", error);
      }
    };
    fetchTransactions();
  }, []);

  // Lọc giao dịch trong khoảng thời gian
  const filteredTransactions = transactions.filter((t) => {
    if (!startDate || !endDate) return true;
    const transactionDate = new Date(t.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return transactionDate >= start && transactionDate <= end;
  });

  // Tính tổng thu và chi
  const calculateSummary = () => {
    let totalIncome = 0;
    let totalExpense = 0;

    filteredTransactions.forEach((t) => {
      const amount = parseFloat(t.amount.replace(/[^0-9.-]+/g, ""));
      if (t.amount.includes("+")) {
        totalIncome += amount;
      } else {
        totalExpense += Math.abs(amount);
      }
    });

    return { totalIncome, totalExpense };
  };

  const { totalIncome, totalExpense } = calculateSummary();

  return (
    <div style={styles.container}>
      {/* Chọn khoảng thời gian */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "white", marginRight: "10px" }}>Ngày bắt đầu: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #bbb",
            backgroundColor: "#2a2a2a",
            color: "white",
          }}
        />
        <label style={{ color: "white", marginLeft: "20px", marginRight: "10px" }}>Ngày kết thúc: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #bbb",
            backgroundColor: "#2a2a2a",
            color: "white",
          }}
        />
      </div>

      {/* Thống kê số tiền thu/chi */}
      <div style={styles.accountSummary}>
        <h2 style={styles.accountTitle}>Thống kê số tiền thu/chi</h2>
        <div style={styles.incomeExpense}>
          <p style={styles.income}>
            Tổng thu: <span>+{totalIncome.toLocaleString()} VND</span>
          </p>
          <div style={styles.incomeBar}></div>
          <p style={styles.expense}>
            Tổng chi: <span>-{totalExpense.toLocaleString()} VND</span>
          </p>
          <div style={styles.expenseBar}></div>
        </div>
      </div>

      {/* Thống kê lịch sử giao dịch */}
      <div style={styles.transactionList}>
        <h2 style={{ ...styles.accountTitle, marginBottom: "10px" }}>
          Lịch sử giao dịch
        </h2>
        {filteredTransactions.map((t, index) => (
          <div key={index} style={styles.transactionItem}>
            <span style={styles.transactionIcon}>{t.icon}</span>
            <div style={styles.transactionInfo}>
              <p style={styles.transactionName}>{t.name}</p>
              <p style={styles.transactionCategory}>{t.category}</p>
            </div>
            <div style={styles.transactionAmount}>
              <p>{t.amount}</p>
              <p style={styles.transactionWallet}>{t.wallet}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}