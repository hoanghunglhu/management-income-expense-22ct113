// components/ExpenseSummary.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import styles from './styles'; // Import styles từ file styles.js

const ExpenseSummary = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'income', amount: 5000 },
    { id: 2, type: 'expense', amount: 1500 },
    { id: 3, type: 'expense', amount: 2000 },
    { id: 4, type: 'income', amount: 3000 },
  ]);

  const totalIncome = transactions
    .filter(txn => txn.type === 'income')
    .reduce((sum, txn) => sum + txn.amount, 0);

  const totalExpense = transactions
    .filter(txn => txn.type === 'expense')
    .reduce((sum, txn) => sum + txn.amount, 0);

  const currentBalance = totalIncome - totalExpense;

  // Dữ liệu cho biểu đồ
  const data = {
    labels: ['Tổng thu', 'Tổng chi'],
    datasets: [
      {
        data: [totalIncome, totalExpense],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tổng Thu: {totalIncome} VND</Text>
      <Text style={styles.title}>Tổng Chi: {totalExpense} VND</Text>
      <Text style={styles.balance}>Số dư: {currentBalance} VND</Text>

      <BarChart
        data={data}
        width={320} // chiều rộng biểu đồ
        height={220} // chiều cao biểu đồ
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0, // số thập phân
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        style={styles.chart}
      />
    </View>
  );
};

export default ExpenseSummary;
