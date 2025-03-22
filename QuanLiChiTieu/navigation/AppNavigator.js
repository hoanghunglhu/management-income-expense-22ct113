import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpenseCategoryScreen from '../screens/ExpenseCategoryScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="ExpenseCategories"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="ExpenseCategories" 
          component={ExpenseCategoryScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 