import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { updateIncomeById, getIncomeById } from '../utils/incomeOperations';

const UpdateIncomeForm = ({ incomeId, onSuccess, onCancel }) => {
  const [income, setIncome] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
    note: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load income data when the component mounts
    const loadIncomeData = async () => {
      try {
        const incomeData = await getIncomeById(incomeId);
        if (incomeData) {
          setIncome({
            title: incomeData.title,
            amount: incomeData.amount.toString(),
            category: incomeData.category,
            date: incomeData.date,
            note: incomeData.note || '',
          });
        } else {
          setError('Income not found');
        }
      } catch (err) {
        setError('Failed to load income data');
        console.error(err);
      }
    };

    if (incomeId) {
      loadIncomeData();
    }
  }, [incomeId]);

  const handleSubmit = async () => {
    // Validate input
    if (!income.title || !income.amount || !income.category || !income.date) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const updatedIncome = {
        ...income,
        amount: parseFloat(income.amount),
      };
      
      await updateIncomeById(incomeId, updatedIncome);
      
      Alert.alert('Success', 'Income updated successfully');
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError('Failed to update income');
      Alert.alert('Error', 'Failed to update income');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Income</Text>
      
      {error && <Text style={styles.errorText}>{error}</Text>}
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={income.title}
          onChangeText={(text) => setIncome({ ...income, title: text })}
          placeholder="Enter title"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          value={income.amount}
          onChangeText={(text) => setIncome({ ...income, amount: text })}
          placeholder="Enter amount"
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          value={income.category}
          onChangeText={(text) => setIncome({ ...income, category: text })}
          placeholder="Enter category"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          value={income.date}
          onChangeText={(text) => setIncome({ ...income, date: text })}
          placeholder="YYYY-MM-DD"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Note (Optional)</Text>
        <TextInput
          style={[styles.input, styles.noteInput]}
          value={income.note}
          onChangeText={(text) => setIncome({ ...income, note: text })}
          placeholder="Enter note"
          multiline
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={onCancel}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.submitButton, loading && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Updating...' : 'Update Income'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  noteInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: '#1e88e5',
    marginLeft: 8,
  },
  cancelButton: {
    backgroundColor: '#757575',
    marginRight: 8,
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default UpdateIncomeForm; 