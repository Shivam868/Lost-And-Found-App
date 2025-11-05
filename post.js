import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

const Post = () => {
    const navigation = useNavigation();

    const handlePostOption = () => {
    }



    return (
        <SafeAreaView style = {styles.mainContainer}>
        <ScrollView style= {styles.outerScrollview} scrollEnabled = {false} >

            <View style = {styles.tabTitleSection}>
                <Text style = {styles.tabTitleText}>
                    Post
                </Text>
            </View>

            <View style = {styles.descriptionSection}>
                <Text style = {styles.descriptionText}>
                    Found a lost item? Post it using these simple steps
                </Text>
            </View>

            <View style = {styles.directionBox1}>
                <Text style = {styles.directionBox1Text}>
                    1. Take a photo or choose from your photo gallery
                </Text>
                <Ionicons 
                    name="camera-outline" // The icon name for the camera
                    size={80}             // Set the size to match your design
                    color="#333"          // Set the color
                />
            </View>

            <View style = {styles.directionBox2}>
                <Text style = {styles.directionBox2Text}>
                    2. Define the category
                </Text>

                <Ionicons 
                    name="phone-portrait-outline" // The icon name for the camera
                    size={80}             // Set the size to match your design
                    color="#333"          // Set the color
                />
                <Ionicons 
                    name="wallet-outline" // The icon name for the camera
                    size={80}             // Set the size to match your design
                    color="#333"          // Set the color
                />

            </View>     

            <View style = {styles.directionBox3}>
                <Text style = {styles.directionBox3Text}>
                    3. Title your listing and describe the item
                </Text>
                <Ionicons 
                    name="pencil-outline" // The icon name for the camera
                    size={80}             // Set the size to match your design
                    color="#333"          // Set the color
                />
            </View>

            <View style = {styles.beginPostButton}>
                <TouchableOpacity style = {styles.buttonFunction} onPress = {handlePostOption}>
                    <Text style = {styles.beginPostButtonText}>
                        Post a Lost Item
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    // App Screen Styles
    mainContainer: {
      flex: 1, // Expand & fill all available space
      justifyContent: 'center', // Distribute space to the center for all items in container
      backgroundColor: '#ffffff'
    },

    outerScrollview: {
      paddingVertical: 20,
    },

    // Tab Title Styles
    tabTitleSection: {
        backgroundColor: '#ffffff',
    },

    tabTitleText: {
      fontSize: 28,
      fontWeight: '800',
      textAlign: 'left',
      marginHorizontal: 12,
    },

    // Instructions Styles
    descriptionSection: {
        marginVertical: 30,
        paddingHorizontal: 10,
    },

    descriptionText: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
        textAlign: 'left',
    },

    directionBox1: {
      backgroundColor: '#d9d9d9',
      marginHorizontal: 20,
      padding: 20,
      marginBottom: 25,
      marginVertical: 5,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '90%',
    },

    directionBox1Text: {
      flex: 1,  
      fontSize: 22, 
      fontWeight: '600', 
      color: 'black', 
      textAlign: 'left',
      marginBottom: 20,
      marginRight: 20,
    },


    directionBox2: {
      backgroundColor: '#d9d9d9',
      marginHorizontal: 20,
      padding: 20,
      marginBottom: 25,
      marginVertical: 5,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '90%',
    },

    directionBox2Text: {
      flex: 1,  
      fontSize: 22, 
      fontWeight: '600', 
      color: 'black', 
      textAlign: 'left',
      marginBottom: 20,
      marginRight: 20,
    },


    directionBox3: {
      backgroundColor: '#d9d9d9',
      marginHorizontal: 20,
      padding: 20,
      marginBottom: 25,
      marginVertical: 5,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '90%',
    },

    directionBox3Text: {
      flex: 1,  
      fontSize: 22, 
      fontWeight: '600', 
      color: 'black', 
      textAlign: 'left',
      marginBottom: 20,
      marginRight: 20, 
    },

    beginPostButton: {
      backgroundColor: '#FFC629',
      marginHorizontal: 15,
      marginVertical: 30,
      paddingVertical: 10,
      borderRadius: 12,
    },

    buttonFunction: {
      alignItems: 'center',
    },

    beginPostButtonText: {
      fontSize: 25,
      fontWeight: '600',
      color: 'black',
      textAlign: 'center',
      marginVertical: 10,
    },


    
})
export default Post;