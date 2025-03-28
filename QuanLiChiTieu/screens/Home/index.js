import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useAuth } from '../../context/AuthContext';
import ExpenseSummary from '../../components/ExpenseSummary';

export default function HomeScreen({ navigation }) {
  const { logout } = useAuth();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang Home</Text>
      {/* Nút đăng xuất: sử dụng hàm logout từ context */}
      <ExpenseSummary />

      <TouchableOpacity 
        style={styles.button}
        onPress={logout}
      >
        <Text style={styles.buttonText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}