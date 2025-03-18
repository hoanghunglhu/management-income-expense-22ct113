import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ExpensePanel from '../../components/ExpensePanel';
import styles from './styles';

const ExpensesScreen = () => {
  const [expenses, setExpenses] = useState([
    {
      id: '1',
      date: '2023-08-15',
      amount: 150000,
      category: 'Ăn uống',
      description: 'Ăn trưa',
      note: 'Với đồng nghiệp'
    },
    {
      id: '2',
      date: '2023-08-14',
      amount: 300000,
      category: 'Di chuyển',
      description: 'Xăng xe',
      note: ''
    },
    {
      id: '3',
      date: '2023-08-13',
      amount: 500000,
      category: 'Mua sắm',
      description: 'Quần áo mới',
      note: 'Sale cuối mùa'
    },
    {
      id: '4',
      date: '2023-08-10',
      amount: 200000,
      category: 'Giải trí',
      description: 'Vé xem phim',
      note: 'Với bạn bè'
    },
    {
      id: '5',
      date: '2023-08-08',
      amount: 1500000,
      category: 'Hoá đơn',
      description: 'Tiền điện tháng 8',
      note: ''
    },
  ]);

  const renderItem = ({ item }) => <ExpensePanel expense={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi Tiêu</Text>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpensesScreen; 