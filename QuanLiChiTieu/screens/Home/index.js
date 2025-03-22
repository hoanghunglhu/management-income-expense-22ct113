import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import { useAuth } from '../../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { logout } = useAuth();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang Home</Text>
      
      {/* Nút dẫn đến Danh Mục Chi */}
      <TouchableOpacity 
        style={[styles.button, { marginBottom: 20 }]}
        onPress={() => navigation.navigate('ExpenseCategories')}
      >
        <Text style={styles.buttonText}>Xem Danh Mục Chi Tiêu</Text>
      </TouchableOpacity>
      
      {/* Nút đăng xuất: sử dụng hàm logout từ context */}
      <TouchableOpacity 
        style={styles.button}
        onPress={logout}
      >
        <Text style={styles.buttonText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}