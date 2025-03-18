import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ExpensePanel = ({ expense }) => {
  const [expanded, setExpanded] = useState(false);

  // Hàm lấy thứ trong tuần từ ngày
  const getDayOfWeek = (dateString) => {
    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  // Format date từ dạng ISO sang dd/mm/yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
      >
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{formatDate(expense.date)}</Text>
          <Text style={styles.dayOfWeek}>{getDayOfWeek(expense.date)}</Text>
        </View>
        <Text style={styles.amount}>-{expense.amount.toLocaleString()} đ</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Danh mục:</Text>
            <Text style={styles.detailValue}>{expense.category}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Mô tả:</Text>
            <Text style={styles.detailValue}>{expense.description}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Ghi chú:</Text>
            <Text style={styles.detailValue}>{expense.note || 'Không có'}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  dateContainer: {
    flexDirection: 'column',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dayOfWeek: {
    fontSize: 14,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f44336', // Red color for expenses
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    width: 80,
    fontWeight: 'bold',
    color: '#555',
  },
  detailValue: {
    flex: 1,
    color: '#333',
  },
});

export default ExpensePanel; 