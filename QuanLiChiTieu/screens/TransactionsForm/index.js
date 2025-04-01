// TransactionForm.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from "./TransactionStyles";

export default function TransactionForm({ navigation }) {
  const [transaction, setTransaction] = useState({
    category: "",
    name: "",
    amount: "",
    note: "",
    date: "",
  });

  const handleSave = async () => {
    try {
      const response = await fetch("https://api.example.com/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...transaction,
          amount: transaction.amount.includes("-")
            ? transaction.amount
            : `+${transaction.amount} đ`, // Định dạng amount
        }),
      });
      if (response.ok) {
        console.log("Giao dịch đã lưu:", transaction);
        navigation.goBack();
      } else {
        console.error("Lỗi khi lưu giao dịch");
      }
    } catch (error) {
      console.error("Lỗi khi gửi API:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giao dịch mới</Text>

      <TextInput
        style={styles.input}
        placeholder="Chọn nhóm giao dịch *"
        onChangeText={(text) => setTransaction({ ...transaction, category: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Tên giao dịch *"
        onChangeText={(text) => setTransaction({ ...transaction, name: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Số tiền giao dịch *"
        keyboardType="numeric"
        onChangeText={(text) => setTransaction({ ...transaction, amount: text })}
      />

      <TouchableOpacity style={styles.datePicker}>
        <FaRegCalendarAlt size={20} color="white" />
        <Text style={styles.dateText}>Chọn ngày</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.noteInput}
        placeholder="Ghi chú"
        multiline
        onChangeText={(text) => setTransaction({ ...transaction, note: text })}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>HỦY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>LƯU</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}