import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import AddCategoryModal from "./FormThemDuLieu"; 
import EditCategoryModal from "./FormSuaDuLieu";
import DeleteCategoryModal from "./Formxoadulieu";

const initialCategories = [
    { id: 1, name: "Tiền lương", icon: require("../../assets/tienluong.png"), description: "Thu nhập từ lương cố định hàng tháng" },
    { id: 2, name: "Tiền thưởng", icon: require("../../assets/tienthuong.png"), description: "Thu nhập từ tiền thưởng công việc" },
    { id: 3, name: "Tiền đầu tư", icon: require("../../assets/dautu.png"), description: "Thu nhập từ đầu tư tài chính" },
    { id: 4, name: "Tiền khác", icon: require("../../assets/tienkhac.png"), description: "Thu nhập từ nguồn khác" },
];

export default function IncomeCategoryScreen({ navigation }) {
    const [categories, setCategories] = useState(initialCategories);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const openEditModal = (category) => {
        setSelectedCategory(category);
        setEditModalVisible(true);
    };
    const openDeleteModal = (category) => {
        setSelectedCategory(category); 
        setDeleteModalVisible(true);
    };
    const addCategory = (name) => {
        const newId = categories.length + 1;
        const newCat = { id: newId, name, icon: require("../../assets/tienkhac.png") };
        setCategories([...categories, newCat]);
        setModalVisible(false);
    };
    const updateCategory = (id, newDescription) => {
        setCategories(categories.map(cat =>
            cat.id === id ? { ...cat, description: newDescription } : cat
        ));
    };
    const deleteCategory = () => {
        if (!selectedCategory) return;

        setCategories(prevCategories => 
            prevCategories.filter(cat => cat.id !== selectedCategory.id)
        );

        console.log("🗑️ Xóa danh mục:", selectedCategory.name);

        setDeleteModalVisible(false);
        setSelectedCategory(null); // Reset lại danh mục đã chọn
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thu nhập</Text>
            <View style={styles.grid}>
                {categories.map((item) => (
                    <View key={item.id} style={styles.categoryItem}>
                        {/* Nội dung danh mục */}
                        <TouchableOpacity onLongPress={() => openEditModal(item)} style={styles.categoryContent}>
                            <Image source={item.icon} style={styles.icon} />
                            <Text style={styles.categoryText}>{item.name}</Text>
                        </TouchableOpacity>

                        {/* Nút xóa */}
                        <TouchableOpacity style={styles.deleteButton} onPress={() => openDeleteModal(item)}>
                            <Image source={require("../../assets/xoa.png")} style={styles.deleteIcon} />
                        </TouchableOpacity>
                    </View>
                ))}
                {/* Nút thêm danh mục */}
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Image source={require("../../assets/them.png")} />
                </TouchableOpacity>
            </View>

            {/* Modal thêm danh mục */}
            <AddCategoryModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onAdd={addCategory}
            />

            {/* Modal sửa danh mục */}
            <EditCategoryModal
                visible={editModalVisible}
                onClose={() => setEditModalVisible(false)}
                categories={categories}
                onSave={updateCategory}
            />

            {/* Modal xóa danh mục */}
            <DeleteCategoryModal
                visible={deleteModalVisible}
                onClose={() => setDeleteModalVisible(false)}
                onDelete={deleteCategory} // Gọi hàm xóa
            />
        </View>
    );
}
