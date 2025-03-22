import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { EXPENSE_CATEGORIES, getCategoryIcon } from '../../constants/expenseCategories';

const ExpenseCategoryItem = ({ item }) => {
  return (
    <View style={[styles.categoryItem, { borderLeftColor: item.color, borderLeftWidth: 5 }]}>
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Ionicons name={getCategoryIcon(item.name)} size={24} color="white" />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );
};

export default function ExpenseCategoriesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={EXPENSE_CATEGORIES}
        renderItem={({ item }) => <ExpenseCategoryItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={() => (
          <View style={styles.noDataContainer}>
            <Ionicons name="document-text-outline" size={64} color="#BDBDBD" />
            <Text style={styles.noDataText}>Không có danh mục chi tiêu nào</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
} 