import React from 'react';
import { StatusBar, Appearance, useColorScheme, View, StyleSheet, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import HomeSignIn from './HomeSignIn'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons";
import Search from './Search';
import BottomTabBar from './BottomTabBar';

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
        <Stack.Screen
          name="MainTabs"
          component={BottomTabBar}
          options={{ headerShown: false }}
        />
        {/* Register the HomeSignIn screen */}
        <Stack.Screen
          name="HomeSignIn"
          component={HomeSignIn}
          options={{ headerShown: false}} // Remove back button from top left bar (Ex: <Home (shown on top left bar))
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

