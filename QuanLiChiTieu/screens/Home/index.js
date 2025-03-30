import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useAuth } from '../../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // Reset navigation stack để ngăn chặn quay lại màn hình Home
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen!</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}