import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const categories = [
    { id: 1, name: "Tiền lương", icon: require("../../assets/tienluong.png") },
    { id: 2, name: "Tiền thưởng", icon: require("../../assets/tienthuong.png") },
    { id: 3, name: "Tiền đầu tư", icon: require("../../assets/dautu.png") },
    { id: 4, name: "Tiền khác", icon: require("../../assets/tienkhac.png") },
];

export default function IncomeCategoryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thu nhập</Text>
            <View style={styles.grid}>
                {categories.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.categoryItem}>
                        <Image source={item.icon} style={styles.icon} />
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.addButton}>
                    <Image source={require("../../assets/them.png")} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
