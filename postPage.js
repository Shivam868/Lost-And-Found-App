import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';


const TI30_Post_Front = require('./assets/postTest/TI30_Front.jpg')
const TI30_Post_Back = require('./assets/postTest/TI30_Back.jpg')

const postPage = () => {

    const navigation = useNavigation();

    const handleContact = () => {
    };

    const handleSave = () => {
    }

    const handleReport = () => {
    }

    return (

      // Item Post Image  
      <SafeAreaView style = {styles.mainContainer}>
      <ScrollView style = {styles.outerScrollView} horizontal = {false} showsHorizontalScrollIndicator={true}>
        

      <ScrollView horizontal = {true} style = {styles.horizontalScrollview}>
      <View style = {styles.itemGrid}>  
        <View style = {styles.itemCard}>
            <Image
                source={TI30_Post_Front}
                style={styles.itemImagePlaceholder}
                resizeMode='stretch'
            />
        </View>
      </View>
      </ScrollView>

      <View style = {styles.postTitle}>
        <Text style = {styles.postTitleText}>
            TI-30XS Multiview Calculator
        </Text>
      </View>

      <View style = {styles.foundLocation}>
        <Text style = {styles.foundLocationText}>
            Found Location: Lunch table outside Stingers Cafe
        </Text>
      </View>

      <View style = {styles.dropoffLocation}>
        <Text style = {styles.dropoffLocationText}>
            Dropoff Location: Joe Mack Wilson Student Center
        </Text>
      </View>

      <View style = {styles.contactSection}>
        <TouchableOpacity style = {styles.singleButton} onPress = {handleContact}>
            <Text style = {styles.singleButtonText}>
                Contact Dropoff Location
            </Text>
        </TouchableOpacity>
      </View>


        <View style = {styles.buttonRowSection}>
            <View style = {styles.buttonRow}>
                <TouchableOpacity style = {styles.singleRowButton} onPress = {handleSave}>
                    <Text style = {styles.saveButtonText}>
                        Save
                    </Text>
                </TouchableOpacity>
        
                <TouchableOpacity style = {styles.singleRowButton} onPress = {handleReport}>
                    <Text style = {styles.reportButtonText}>
                      Report
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

      <View style = {styles.descTitleSection}>
        <Text style = {styles.descTitleText}>
            Item Description
        </Text>
      </View>


      <View style = {styles.descriptionSection}>
        <Text style = {styles.descriptionText}>
            This item was found on a lunch table outside the Stingers cafe. The device is still functional. Dropped off at the Student Center on the Marietta Campus. 
        </Text>
      </View>



      </ScrollView>  
      </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
        //Scrolling Styles
      mainContainer: {
        flex: 1, // Expand & fill all available space
        justifyContent: 'center', // Distribute space to the center for all items in container
        backgroundColor: '#ffffff',
      },

        // Scroll for entire app
      outerScrollview: {
        paddingVertical: 20,
      },





      itemCard: {
        width: 400,
        height: 475,
        backgroundColor: '#f5f5f5',
        borderColor: '#cccccc',
        borderWidth: 1,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },

      itemImagePlaceholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e0e0e0',
      },


      // Post Listing Styles
      postTitle: {
        marginVertical: 20,
        paddingHorizontal: 5,
      },

      postTitleText: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
        textAlign: 'left',
      },

      foundLocation: {
        marginVertical: 10,
        paddingHorizontal: 5,
      },

      foundLocationText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        textAlign: 'left',
      },

      dropoffLocation: {
        marginVertical: 10,
        paddingHorizontal: 5,
      },

      dropoffLocationText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        textAlign: 'left',
      },








    // Button Styles
    contactSection: {
      backgroundColor: '#FFC629',
      marginHorizontal: 45,
      borderRadius: 12,
      padding: 10,
      marginBottom: 20,
      alignItems: 'center', 
      marginVertical: 15,
    },

    singleButton: {
      backgroundColor: '#FFC629',  
      borderRadius: 8, 
      flex: 1,
      alignItems: 'center',
    },

    singleButtonText: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black',
      textAlign: 'center',
      paddingVertical: 10,
    },






    // Button Row Styles

    // Section for a row of buttons
    buttonRowSection: {
      marginHorizontal: 10, 
      borderRadius: 12, 
      padding: 10, 
      marginBottom: 20, 
      alignItems: 'center', 
    },

    // Keep buttons in same row
    buttonRow: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      gap: 30, 
    },

    // Button style adjustment
    singleRowButton: {
      backgroundColor: '#FFC629',
      paddingVertical: 15, // Spacing between top and bottom sides
      paddingHorizontal: 24, // Spacing between left and right sides
      borderRadius: 8, // Border Radius level
      flex: 1,
      alignItems: 'center',
    },

    // Create account text and button style
    saveButtonText: { 
      fontSize: 22,
      fontWeight: '600',
      color: 'black',
      alignItems: 'center',
      textAlign: 'center',
    },

    // Sign in text and button style
    reportButtonText: {
      fontSize: 22,
      fontWeight: '600',
      color: 'black',
      textAlign: 'center',
    },


    // Item Description Title
    descTitleSection: {
        marginVertical: 10,
        paddingHorizontal: 5,
    },

    descTitleText: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
        textAlign: 'left',
    },

    // Item Description Text

    descriptionSection: {
        marginVertical: 10,
        paddingHorizontal: 5,
    },

    descriptionText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        textAlign: 'left',
    },






});

export default postPage;