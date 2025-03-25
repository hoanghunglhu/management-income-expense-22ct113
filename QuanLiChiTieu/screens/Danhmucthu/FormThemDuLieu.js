import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import styles from "./styles"; 

export default function AddCategoryModal({ visible, onClose, onAdd }) {
    const [newCategory, setNewCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleAdd = () => {
        if (newCategory.trim() !== "") {
            onAdd(newCategory, description);
            setNewCategory("");
            setDescription("");
        }
    };

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Tạo mới nhóm phân loại</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Tên nhóm phân loại" 
                        value={newCategory} 
                        onChangeText={setNewCategory} 
                    />
                    <TextInput 
                        style={[styles.input, styles.inputDescription]} 
                        placeholder="Mô tả" 
                        value={description} 
                        onChangeText={setDescription} 
                        multiline
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                            <Text style={styles.buttonText}>HỦY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton} onPress={handleAdd}>
                            <Text style={styles.buttonText}>LƯU</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
