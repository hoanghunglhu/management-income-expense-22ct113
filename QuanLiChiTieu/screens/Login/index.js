import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../context/AuthContext";
import styles from "./styles";

// Regex để xác thực email & mật khẩu
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,255}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginScreen() {
  const { login } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  //focus email
  const emailInputRef = useRef(null);
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

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

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage(null);

    const result = await login(data.email, data.password);

    if (!result.success) {
      setMessage(result.message);
      setMessageType("error");
    } else {
      setMessage("Đăng nhập thành công!");
      setMessageType("success");
    }

    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>

      {/* Hiển thị thông báo */}
      {message && (
        <View style={[styles.messageBox, messageType === "error" ? styles.errorBox : styles.successBox]}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}

      {/* Email Input */}
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email là bắt buộc",
          pattern: { value: EMAIL_REGEX, message: "Email không đúng định dạng" },
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

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password là bắt buộc",
            pattern: { value: PASSWORD_REGEX, message: "Mật khẩu không hợp lệ" },
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
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <MaterialIcons name={passwordVisible ? "visibility" : "visibility-off"} size={24} color="gray" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      {/* Button Đăng nhập */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)} disabled={loading}>
        {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Đăng Nhập</Text>}
      </TouchableOpacity>
    </View>
  );
}
