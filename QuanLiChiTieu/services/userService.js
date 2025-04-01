import AsyncStorage from '@react-native-async-storage/async-storage';

// Hàm lấy thông tin user từ AsyncStorage
export const getUserById = async (userId) => {
  try {
    const users = await AsyncStorage.getItem('users');
    if (users) {
      const parsedUsers = JSON.parse(users);
      return parsedUsers.find(user => user.id === userId);
    }
    return null;
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
};

// Hàm cập nhật thông tin user
export const updateUserById = async (userId, updatedData) => {
  try {
    const users = await AsyncStorage.getItem('users');
    let parsedUsers = users ? JSON.parse(users) : [];
    
    const userIndex = parsedUsers.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    // Cập nhật thông tin user
    parsedUsers[userIndex] = {
      ...parsedUsers[userIndex],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };

    // Lưu lại vào AsyncStorage
    await AsyncStorage.setItem('users', JSON.stringify(parsedUsers));
    return parsedUsers[userIndex];
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}; 