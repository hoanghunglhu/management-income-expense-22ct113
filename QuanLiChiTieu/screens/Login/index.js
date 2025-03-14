import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useAuth } from "../../context/AuthContext";

// Regex để validate password: yêu cầu có ít nhất 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt (!@#$%^&*)
// Và email theo định dạng thông thường.
const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,255}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const { login } = useAuth();
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    // Kiểm tra dữ liệu sau khi validate thành công

    if (data.email === "example@gmail.com" && data.password === "Example@123") {
      setMessage("Đăng nhập thành công!");
      setMessageType("success");
      setTimeout(() => {
        setMessage(null);
        // Gọi hàm login từ context để cập nhật trạng thái đăng nhập
        login();
      }, 2000);
    } else {
      setMessage("Email hoặc mật khẩu không đúng!");
      setMessageType("error");
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>

      {message && (
        <View style={[styles.messageBox, messageType === 'error' ? styles.errorBox : styles.successBox]}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}
      {/* Email Field */}
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email là bắt buộc",
          maxLength: { value: 255, message: "Email không vượt quá 255 ký tự" },
          pattern: {
            value: EMAIL_REGEX,
            message: "Email không đúng định dạng",
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

      {/* Password Field */}
      <View style={styles.passwordContainer}>
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password là bắt buộc",
            minLength: { value: 8, message: "Password phải tối thiểu 8 ký tự" },
            maxLength: {
              value: 255,
              message: "Password không vượt quá 255 ký tự",
            },
            pattern: {
              value: PASSWORD_REGEX,
              message:
                "Phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.passwordInputWrapper}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Nhập Password"
                secureTextEntry={!passwordVisible}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <MaterialIcons
                  name={passwordVisible ? "visibility" : "visibility-off"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      {/* Button Đăng nhập */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
      </TouchableOpacity>
    </View>
  );
}
