import React from 'react';
import { StatusBar, Appearance, useColorScheme, View, StyleSheet, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import HomeSignIn from './HomeSignIn'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons";
import Search from './Search';
import Login from './login';
import SignUpScreen from './signup';
import BottomTabBar from './BottomTabBar';
import LoginScreen from './login';

const Stack = createNativeStackNavigator();


// Main App UI
export default function App () {
  const colorScheme = useColorScheme();

  const statusBarStyle = colorScheme === 'dark' ? 'light-content' : 'dark-content';

  return (
    <NavigationContainer>
      <StatusBar barStyle={statusBarStyle} />
      {/* 3. Define the stack navigator and screens */}
      <Stack.Navigator>
        {/* Set Home as the initial screen and hide its header */}
        {/* Register the HomeSignIn screen */}


        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, gestureEnabled: false}} // Remove back button from top left bar (Ex: <Home (shown on top left bar))
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false, gestureEnabled: false}} // Remove back button from top left bar (Ex: <Home (shown on top left bar))
        />

        <Stack.Screen
          name="BottomTabBar"
          component={BottomTabBar}
          options={{ headerShown: false, gestureEnabled: false }}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  ScrollView: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

