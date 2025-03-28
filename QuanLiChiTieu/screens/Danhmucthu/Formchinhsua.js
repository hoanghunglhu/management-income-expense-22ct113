import React, { useState } from "react";
import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles"; // Import styles từ file styles.js

export default function EditCategoryModal({ visible, onClose, categories, onSave }) {
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [description, setDescription] = useState("");

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Sửa nhóm phân loại</Text>

                    <Text style={styles.label}>Tên nhóm phân loại *</Text>
                    <DropDownPicker
                        open={open}
                        setOpen={setOpen}
                        value={selectedCategory}
                        setValue={setSelectedCategory}
                        items={categories.map(cat => ({ label: cat.name, value: cat.id }))}
                        containerStyle={styles.dropdownContainer}
                    />

                    <TextInput
                        value={description}
                        placeholder="Mô tả"
                        onChangeText={setDescription}
                        style={[styles.inputDescription, styles.input]}
                        multiline
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                            <Text style={styles.buttonText}>HỦY</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                onSave(selectedCategory, description);
                                onClose();
                            }}
                            style={styles.saveButton}
                        >
                            <Text style={styles.buttonText}>LƯU</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}