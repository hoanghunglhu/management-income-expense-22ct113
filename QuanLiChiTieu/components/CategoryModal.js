import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const COLORS = [
  '#FF5252', '#448AFF', '#9C27B0', '#FF9800', '#607D8B',
  '#4CAF50', '#FF4081', '#00BCD4', '#795548', '#8BC34A',
];

const ICONS = [
  { name: 'fastfood', label: 'Ăn uống' },
  { name: 'directions-car', label: 'Di chuyển' },
  { name: 'shopping-cart', label: 'Mua sắm' },
  { name: 'movie', label: 'Giải trí' },
  { name: 'receipt', label: 'Hóa đơn' },
  { name: 'healing', label: 'Y tế' },
  { name: 'home', label: 'Nhà cửa' },
  { name: 'fitness-center', label: 'Thể thao' },
  { name: 'school', label: 'Giáo dục' },
  { name: 'card-giftcard', label: 'Quà tặng' },
];

const CategoryModal = ({ visible, onClose, onSave, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [selectedColor, setSelectedColor] = useState(initialData?.color || COLORS[0]);
  const [selectedIcon, setSelectedIcon] = useState(initialData?.icon || ICONS[0].name);

  const handleSave = () => {
    if (name.trim() === '') {
      alert('Vui lòng nhập tên danh mục');
      return;
    }
    onSave({ name, color: selectedColor, icon: selectedIcon });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {initialData ? 'Sửa Danh Mục' : 'Thêm Danh Mục Mới'}
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Tên danh mục"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.sectionTitle}>Chọn màu sắc:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.colorContainer}>
              {COLORS.map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[styles.colorOption, { backgroundColor: color },
                    selectedColor === color && styles.selectedColor]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
            </View>
          </ScrollView>

          <Text style={styles.sectionTitle}>Chọn biểu tượng:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.iconContainer}>
              {ICONS.map((icon) => (
                <TouchableOpacity
                  key={icon.name}
                  style={[styles.iconOption,
                    selectedIcon === icon.name && styles.selectedIcon]}
                  onPress={() => setSelectedIcon(icon.name)}
                >
                  <MaterialIcons name={icon.name} size={24} color={selectedIcon === icon.name ? '#3F51B5' : '#666'} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  colorContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedColor: {
    borderWidth: 3,
    borderColor: '#3F51B5',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  selectedIcon: {
    backgroundColor: '#e8eaf6',
    borderWidth: 2,
    borderColor: '#3F51B5',
  },
  saveButton: {
    backgroundColor: '#3F51B5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryModal;