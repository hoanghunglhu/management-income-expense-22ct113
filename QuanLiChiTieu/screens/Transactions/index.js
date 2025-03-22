import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from "./TransactionStyles";

export default function Transactions() {
  const transactions = [
    { icon: "🍽️", name: "Ăn uống", category: "Riêng tôi", amount: "-100,000 đ", wallet: "Ví của tôi" },
    { icon: "🌍", name: "Du lịch", category: "Gia đình", amount: "-5,000,000 đ", wallet: "Ví của tôi" },
    { icon: "💰", name: "Tiền lương", category: "Riêng tôi", amount: "+30,000,000 đ", wallet: "Ví của tôi" },
    { icon: "🏥", name: "Chữa bệnh", category: "Thú cưng", amount: "-500,000 đ", wallet: "Ví của tôi" },
    { icon: "🚌", name: "Di chuyển", category: "Riêng tôi", amount: "-20,000 đ", wallet: "Ví của tôi" },
    { icon: "💡", name: "Hóa đơn nước", category: "Riêng tôi", amount: "-300,000 đ", wallet: "Ví của tôi" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.accountSummary}>
        <h2 style={styles.accountTitle}>Tài khoản của tôi</h2>
        <p style={styles.accountBalance}>50,000,000 VND</p>
        <div style={styles.incomeExpense}>
          <p style={styles.income}>Thu nhập <span>+60,000,000 VND</span></p>
          <div style={styles.incomeBar}></div>
          <p style={styles.expense}>Chi tiêu <span>-10,000,000 VND</span></p>
          <div style={styles.expenseBar}></div>
        </div>
      </div>
      <div style={styles.transactionList}>
        {transactions.map((t, index) => (
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