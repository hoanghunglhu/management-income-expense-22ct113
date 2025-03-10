import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';

// Regex để validate password: yêu cầu có ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt (!@#$%^&*)
// Và email theo định dạng thông thường.
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,255}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    // Kiểm tra dữ liệu sau khi validate thành công
    console.log('Dữ liệu đăng nhập:', data);
    // Sau khi login thành công, điều hướng sang Home
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      
      {/* Email Field */}
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email là bắt buộc',
          maxLength: { value: 255, message: 'Email không vượt quá 255 ký tự' },
          pattern: { value: EMAIL_REGEX, message: 'Email không đúng định dạng' },
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
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      {/* Password Field */}
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password là bắt buộc',
          minLength: { value: 8, message: 'Password phải tối thiểu 8 ký tự' },
          maxLength: { value: 255, message: 'Password không vượt quá 255 ký tự' },
          pattern: {
            value: PASSWORD_REGEX,
            message: 'Phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nhập Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      {/* Button Đăng nhập */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>
    </View>
  );
}