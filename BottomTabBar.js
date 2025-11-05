import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import HomeSignIn from './HomeSignIn';
import Search from './Search';
import Post from './post';

import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

function BottomTabBar() {
  return (
    <Tab.Navigator
      

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "SearchPage") iconName = "search";
          else if (route.name === "Post") iconName = "add"
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeSignIn} options={{ headerShown: false }} />
      <Tab.Screen name="SearchPage" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="Post" component={Post} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default BottomTabBar;