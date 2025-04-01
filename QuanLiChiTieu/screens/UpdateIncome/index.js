import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import UpdateIncomeForm from '../../components/UpdateIncomeForm';

const UpdateIncomeScreen = ({ route, navigation }) => {
  const { incomeId } = route.params || {};

  const handleSuccess = () => {
    // Navigate back after successful update
    navigation.goBack();
  };

  const handleCancel = () => {
    // Navigate back when the user cancels
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <UpdateIncomeForm
          incomeId={incomeId}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default UpdateIncomeScreen; 