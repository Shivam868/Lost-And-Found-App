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
import WelcomeScreen from './welcome';
import postPage from './postPage'

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
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false, gestureEnabled: false}} // Remove top left back button and disable left swipe to previous page function
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, gestureEnabled: false}} // Remove top left back button and disable left swipe to previous page function
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false, gestureEnabled: false}} // Remove top left back button and disable left swipe to previous page function
        />

        <Stack.Screen
          name="BottomTabBar"
          component={BottomTabBar}
          options={{ headerShown: false, gestureEnabled: false }}
        />

        <Stack.Screen
          name="postPage"
          component={postPage}
          options={{title: 'Lost Item', headerBackTitle: 'Back',}}
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

