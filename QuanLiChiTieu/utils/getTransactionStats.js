import moment from "moment";

// Hàm lấy dữ liệu giao dịch theo ngày trong tháng hiện tại
export const getTransactionStats = (transactions) => {
  const currentMonth = moment().format("YYYY-MM"); // Lấy tháng hiện tại (VD: "2025-03")

  // Lọc ra các giao dịch thuộc tháng hiện tại
  const filteredTransactions = transactions.filter((tx) =>
    tx.date.startsWith(currentMonth)
  );

  // Nhóm theo ngày và đếm số lượng giao dịch
  const transactionCountByDay = {};
  filteredTransactions.forEach((tx) => {
    const day = moment(tx.date).format("DD"); // Lấy ngày (VD: "22")
    transactionCountByDay[day] = (transactionCountByDay[day] || 0) + 1;
  });

  // Chuyển đổi thành mảng để vẽ biểu đồ
  return Object.keys(transactionCountByDay).map((day) => ({
    day: `Ngày ${day}`,
    count: transactionCountByDay[day],
  }));
};
