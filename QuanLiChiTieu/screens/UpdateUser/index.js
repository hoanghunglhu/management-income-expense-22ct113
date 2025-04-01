import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { getUserById, updateUserById } from '../../services/userService';
import styles from './styles';

export default function UpdateUserScreen({ route, navigation }) {
  const { userId } = route.params;
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await getUserById(userId);
        if (userData) {
          reset({
            fullName: userData.fullName,
            email: userData.email,
            phone: userData.phone,
          });
        }
      } catch (error) {
        Alert.alert('Lỗi', 'Không thể tải thông tin người dùng');
      }
    };

    loadUserData();
  }, [userId]);

  const onSubmit = async (data) => {
    try {
      await updateUserById(userId, data);
      setMessage('Cập nhật thông tin thành công!');
      setMessageType('success');
      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    } catch (error) {
      setMessage('Cập nhật thông tin thất bại!');
      setMessageType('error');
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cập Nhật Thông Tin</Text>

      {message && (
        <View
          style={[
            styles.messageBox,
            messageType === 'error' ? styles.errorBox : styles.successBox,
          ]}
        >
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}

      <Controller
        control={control}
        name="fullName"
        rules={{
          required: 'Họ tên là bắt buộc',
          maxLength: { value: 255, message: 'Họ tên không vượt quá 255 ký tự' },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nhập họ tên"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.fullName && (
        <Text style={styles.errorText}>{errors.fullName.message}</Text>
      )}

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email là bắt buộc',
          maxLength: { value: 255, message: 'Email không vượt quá 255 ký tự' },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Email không đúng định dạng',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nhập Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        name="phone"
        rules={{
          required: 'Số điện thoại là bắt buộc',
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Số điện thoại không hợp lệ',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.phone && (
        <Text style={styles.errorText}>{errors.phone.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Cập Nhật</Text>
      </TouchableOpacity>
    </View>
  );
} 