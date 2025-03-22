import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert
} from 'react-native';
import AddEditCategoryModal from './Custom';

const ExpenseCategoryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [customModalVisible, setCustomModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const [categories, setCategories] = useState([
    { id: '1', name: 'Ăn uống', color: '#FF5252', symbol: '🍔', description: 'Chi phí ăn uống hàng ngày' },
    { id: '2', name: 'Di chuyển', color: '#448AFF', symbol: '🚗', description: 'Chi phí di chuyển, xăng xe' },
    { id: '3', name: 'Mua sắm', color: '#9C27B0', symbol: '🛒', description: 'Chi phí mua sắm đồ dùng' },
    { id: '4', name: 'Giải trí', color: '#FF9800', symbol: '🎬', description: 'Chi phí giải trí, xem phim' },
    { id: '5', name: 'Hóa đơn', color: '#607D8B', symbol: '📄', description: 'Chi phí hóa đơn điện nước' },
    { id: '6', name: 'Y tế', color: '#4CAF50', symbol: '💊', description: 'Chi phí khám bệnh, thuốc men' },
    { id: '7', name: 'Nhà cửa', color: '#FF4081', symbol: '🏠', description: 'Chi phí sửa chữa nhà cửa' },
    { id: '8', name: 'Thể thao', color: '#00BCD4', symbol: '🏋️', description: 'Chi phí tập luyện thể thao' },
    { id: '9', name: 'Giáo dục', color: '#795548', symbol: '📚', description: 'Chi phí học tập, sách vở' },
    { id: '10', name: 'Quà tặng', color: '#8BC34A', symbol: '🎁', description: 'Chi phí mua quà tặng' },
  ]);

  const handleCategoryPress = (item) => {
    setSelectedCategory(item);
    setModalVisible(true);
  };

  const handleEditCategory = () => {
    setModalVisible(false);
    setEditingCategory(selectedCategory);
    setCustomModalVisible(true);
  };

  const handleAddNewCategory = () => {
    setEditingCategory(null);
    setCustomModalVisible(true);
  };

  const handleSaveCategory = (data) => {
    if (editingCategory) {
      // Cập nhật danh mục
      setCategories(categories.map(cat => 
        cat.id === editingCategory.id 
          ? { ...cat, name: data.name, description: data.description } 
          : cat
      ));
      Alert.alert('Thành công', 'Đã cập nhật danh mục thành công');
    } else {
      // Thêm danh mục mới
      const newId = String(Math.max(...categories.map(cat => Number(cat.id)), 0) + 1);
      const colors = ['#FF5252', '#448AFF', '#9C27B0', '#FF9800', '#607D8B', '#4CAF50', '#FF4081', '#00BCD4', '#795548', '#8BC34A'];
      const symbols = ['🍔', '🚗', '🛒', '🎬', '📄', '💊', '🏠', '🏋️', '📚', '🎁', '💼', '💰', '🧸', '👕', '📱'];
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      
      const newCategory = {
        id: newId,
        name: data.name,
        description: data.description,
        color: randomColor,
        symbol: randomSymbol
      };
      
      setCategories([...categories, newCategory]);
      Alert.alert('Thành công', 'Đã thêm danh mục thành công');
    }
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(item)}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Danh Mục Chi</Text>
      </View>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <TouchableOpacity 
            style={styles.addNewButton}
            onPress={handleAddNewCategory}
          >
            <Text style={styles.addNewButtonText}>+ Thêm mới nhóm phân loại</Text>
          </TouchableOpacity>
        }
      />

      {/* Modal Chi tiết danh mục */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedCategory && (
              <>
                <View style={styles.modalHeader}>
                  <View style={[styles.modalIconContainer, { backgroundColor: selectedCategory.color }]}>
                    <Text style={styles.modalSymbol}>{selectedCategory.symbol}</Text>
                  </View>
                  <Text style={styles.modalTitle}>{selectedCategory.name}</Text>
                </View>
                
                <View style={styles.modalContent}>
                  <Text style={styles.modalDescription}>
                    {selectedCategory.description || 'Không có mô tả'}
                  </Text>
                  
                  <View style={styles.statisticsContainer}>
                    <View style={styles.statisticsItem}>
                      <Text style={styles.statisticsValue}>0đ</Text>
                      <Text style={styles.statisticsLabel}>Tháng này</Text>
                    </View>
                    
                    <View style={styles.statisticsItem}>
                      <Text style={styles.statisticsValue}>0đ</Text>
                      <Text style={styles.statisticsLabel}>Trung bình/tháng</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.actionButtonsContainer}>
                  <Pressable
                    style={[styles.button, styles.buttonEdit]}
                    onPress={handleEditCategory}
                  >
                    <Text style={styles.textStyle}>Chỉnh sửa</Text>
                  </Pressable>
                  
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Đóng</Text>
                  </Pressable>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Modal thêm/sửa danh mục */}
      <AddEditCategoryModal
        visible={customModalVisible}
        onClose={() => setCustomModalVisible(false)}
        onSave={handleSaveCategory}
        initialData={editingCategory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 30, // Thêm padding top để tránh status bar
  },
  header: {
    padding: 16,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    padding: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbolText: {
    fontSize: 18,
  },
  categoryName: {
    fontSize: 16,
    flex: 1,
  },
  // Modal styles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  modalIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  modalSymbol: {
    fontSize: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContent: {
    width: '100%',
    marginBottom: 20,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  statisticsItem: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    margin: 5,
  },
  statisticsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F51B5',
  },
  statisticsLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flex: 1,
    margin: 5,
  },
  buttonEdit: {
    backgroundColor: '#FF9800',
  },
  buttonClose: {
    backgroundColor: '#3F51B5',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addNewButton: {
    backgroundColor: '#3F51B5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addNewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ExpenseCategoryScreen;