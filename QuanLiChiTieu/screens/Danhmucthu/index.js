import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import AddCategoryModal from "./FormThemDuLieu"; // Import modal
import EditCategoryModal from "./FormSuaDuLieu";

const initialCategories = [
    { id: 1, name: "Tiền lương", icon: require("../../assets/tienluong.png"), description: "Thu nhập từ lương cố định hàng tháng" },
    { id: 2, name: "Tiền thưởng", icon: require("../../assets/tienthuong.png"), description: "Thu nhập từ lương cố định hàng tháng" },
    { id: 3, name: "Tiền đầu tư", icon: require("../../assets/dautu.png"), description: "Thu nhập từ lương cố định hàng tháng" },
    { id: 4, name: "Tiền khác", icon: require("../../assets/tienkhac.png"), description: "Thu nhập từ lương cố định hàng tháng" },
];

export default function IncomeCategoryScreen({ navigation }) {
    const [categories, setCategories] = useState(initialCategories);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const openEditModal = (category) => {
        setSelectedCategory(category);
        setEditModalVisible(true);
    };

    const updateCategory = (id, newDescription) => {
        setCategories(categories.map(cat =>
            cat.id === id ? { ...cat, description: newDescription } : cat
        ));
    };

    const addCategory = (name) => {
        const newId = categories.length + 1;
        const newCat = { id: newId, name, icon: require("../../assets/tienkhac.png") };
        setCategories([...categories, newCat]);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thu nhập</Text>
            <View style={styles.grid}>
                {categories.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.categoryItem} onLongPress={() => openEditModal(item)}>
                        <Image source={item.icon} style={styles.icon} />
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
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

            <EditCategoryModal
                visible={editModalVisible}
                onClose={() => setEditModalVisible(false)}
                categories={categories}
                onSave={updateCategory}
            />
        </View>
    );
}
