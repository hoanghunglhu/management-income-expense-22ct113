import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Tạo context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Danh sách tài khoản mặc định (chưa có backend)
  const defaultUsers = [
    {
      email: "admin@gmail.com",
      phone: "0123456789",
      password: "Admin@123", // Mật khẩu hợp lệ
      role: "admin",
    },
  ];

  // Kiểm tra trạng thái đăng nhập khi ứng dụng khởi động
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        setIsLoading(true);
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.log("Lỗi khi kiểm tra trạng thái đăng nhập:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  // Hàm đăng nhập
  const login = async (email, password) => {
    const foundUser = defaultUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      try {
        await AsyncStorage.setItem("user", JSON.stringify(foundUser));
        setUser(foundUser);
        return { success: true, user: foundUser };
      } catch (error) {
        console.log("Lỗi khi lưu trạng thái đăng nhập:", error);
        return { success: false, message: "Lỗi hệ thống, thử lại sau." };
      }
    } else {
      return { success: false, message: "Sai tài khoản hoặc mật khẩu" };
    }
  };

  // Hàm đăng xuất
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.log("Lỗi khi đăng xuất:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook tiện ích để sử dụng AuthContext
export const useAuth = () => useContext(AuthContext);
