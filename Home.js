import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const beatsImage = require('./assets/postTest/beats.jpg')
const calcImage = require('./assets/postTest/calculator.jpg')
const controllerImage = require('./assets/postTest/controller.jpg')
const iPhoneImage2 = require('./assets/postTest/iPhone_back.jpg')
const iPhoneImage1 = require('./assets/postTest/iPhone.jpg')



const Home = () => {


  const navigation = useNavigation();

  const handleCreateAccount = () => {
  };

  const handleSignIn = () => {
    navigation.navigate('HomeSignIn')
  };

  const handleLearnMore = () => {
  };

  const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
      setSearchText(text);
      onSearch(text);
    };

    // Adding Search Bar to the Page
    return (
    <View style = {styles.searchBar}>
      <TextInput style = {styles.searchInput} 
        placeholder = "What item are you looking for?                                🔎" 
        value = {searchText}
        onChangeText = {handleSearch}/>
    </View>    
    );
  }


  // Random Marked Locations for Apple Map API

  const pinPoints = [
    {
      id: 1,
      title: 'Airpods Pro',
      description: 'Found in math building on red chair',
      coordinate: {
        latitude: 33.93998,
        longitude: -84.52046,
      },
    },

    {
      id: 2,
      title: 'Green Composition Notebook',
      description: 'Found in atrium building lobby',
      coordinate: {
        latitude: 33.93763,
        longitude: -84.52025,
      },
    },

    {
      id: 3,
      title: 'Dell Laptop',
      description: 'Found in eating area outside Stingers cafe',
      coordinate: {
        latitude: 33.93731,
        longitude: -84.52200,
      },
    },


    {
      id: 4,
      title: 'Black Owala Bottle',
      description: 'Found in table outside of crawford lab building',
      coordinate: {
        latitude: 33.93953,
        longitude: -84.52160,
      },
    },

  ];




  //App Display Section
  return (

    <SafeAreaView style = {styles.mainContainer}>
    <ScrollView style= {styles.outerScrollview} horizontal = {false} showsVerticalScrollIndicator={true}>  

      {/* App Title */}
      <View style = {styles.appTitleSection}>
        <Text style = {styles.appName}>
          Retrieve it
        </Text>
      </View>      

      {/* App Title */}
      <SearchBar onSearch={(query) => console.log('Search executed with:', query)} />


      {/* Create Account & Sign In Banner*/}
      <View style = {styles.greenBanner}>
        <Text style = {styles.bannerTitle}>
          Providing a convenient way to search and retrieve your lost items
        </Text>

        <View style = {styles.buttonRow}>
          <TouchableOpacity style = {styles.whiteButton} onPress = {handleCreateAccount}>
            <Text style = {styles.createAccountButton}>
            Create account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.whiteButton} onPress = {handleSignIn}>
            <Text style = {styles.signInButton}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>



        {/* Learn More Banner */}
      <View style = {styles.goldBanner}>
        <Text style = {styles.goldBannerText}>
          Learn about our app mission and features
        </Text>
        <View style = {styles.goldBannerButton}>
          <TouchableOpacity style = {styles.whiteButton} onPress = {handleLearnMore}>
            <Text style = {styles.learnMoreButton}>
              Learn more
            </Text>
          </TouchableOpacity>
        </View>
      </View>



      {/* Recently Found Posts Banner */}

      <View style = {styles.postSection}>
        <Text style = {styles.postSection_Title}>
          Recently Found
        </Text>


        <ScrollView horizontal = {true} style = {styles.horizontalScrollview}>
        <View style = {styles.itemGrid}>
          

          <View style = {styles.itemCard}>
            <Image
              source={beatsImage}
              style={styles.itemImagePlaceholder} 
              resizeMode="cover" 
            />
          </View>

        
          <View style = {styles.itemCard}>
            <Image
              source={calcImage}
              style={styles.itemImagePlaceholder} 
              resizeMode="cover" 
            />
          </View>


          <View style = {styles.itemCard}>
            <Image
              source={controllerImage}
              style={styles.itemImagePlaceholder} 
              resizeMode="cover" 
            />
          </View>


          <View style = {styles.itemCard}>
            <Image
              source={iPhoneImage1}
              style={styles.itemImagePlaceholder} 
              resizeMode="cover" 
            />
          </View>
        </View>
        </ScrollView>
      </View>









      {/* Apple Maps API Banner */}

      <View style = {styles.mapSection}>

        <Text style = {styles.mapSectionTitle}>
          Lost & Found Locations
          </Text>

        <MapView style = {styles.mapAPI} initialRegion={{
          latitude: 33.93858,
          longitude: -84.52056,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        >

        {pinPoints.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            />
        ))}
        </MapView>
        
      </View>









      {/* Report Bug Banner */}
      <View style = {styles.bugBanner}>
        <Text style = {styles.bugBannerText}>
          Experienced a bug? Report it here to help improve the app
        </Text>
        <View style = {styles.bugBannerButton}>
          <TouchableOpacity style = {styles.whiteButton} onPress = {handleLearnMore}>
            <Text style = {styles.reportBugButton}>
              Report bug
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
    </SafeAreaView>
    );
  }


















  //Styling Section
  const styles = StyleSheet.create({
  
    //Scrolling Styles
    mainContainer: {
      flex: 1, // Expand & fill all available space
      justifyContent: 'center', // Distribute space to the center for all items in container
      backgroundColor: '#ffffff' // Page Background
    },

    horizontalScrollview: {
      height: 122, //Adjust the display height of horizontal scrolling
    },



    // Scroll for entire app
    outerScrollview: {
      paddingVertical: 20, // Height of outer ScrollView
    },


    //App Title Styles

    appTitleSection: {
      backgroundColor: '#ffffff', // Background color for app name
    },

    appName: {
      fontSize: 35, // Font
      fontWeight: '600', // Boldness level
      textAlign: 'left', // Text alignment
      marginHorizontal: 12, // Text Alignment position adjustment
    },


    //Search Bar Styles

    searchBar: {
      padding: 10, // Width 
      backgroundColor: '#ffffff', // Background color
      marginHorizontal: 10, // Width
    },

    searchInput: {
      height: 40, // Input height
      borderColor: '#000000', // Border color
      borderWidth: 1, // Border Color level
      borderRadius: 8, // Border Radius level
      paddingHorizontal: 10, // Horizontal level
    },






    //Styles for Login and App Information banners


    bannerTitle: {
      fontSize: 18, // Font Size
      fontWeight: '600', // Font Boldness Size
      color: 'black', // Text color
      textAlign: 'center', // Text alignment
      marginBottom: 20, // Space between bottom edge of an element and element below it
      lineHeight: 25, // Vertical spacing between line of text
    },

    // Create & Sign in button banner
    greenBanner: {
      backgroundColor: '#62F4AB',
      marginHorizontal: 20, // Margin space of the left and right sides
      borderRadius: 12, // Roundness of shapes
      padding: 25, // Spacing inside element (between content & border)
      marginBottom: 20, // Space between bottom edge of an element and element below it
      alignItems: 'center', // Text alignment
      marginVertical: 5, // Vertical Spacing level
    },

    // White Button Default Style (Works on all buttons)
    whiteButton: {
      backgroundColor: 'white', // Background color
      paddingVertical: 12, // Spacing between top and bottom sides
      paddingHorizontal: 24, // Spacing between left and right sides
      borderRadius: 8, // Border Radius level
      flex: 1,
      alignItems: 'center',
    },

    // 2 Buttons in same row
    buttonRow: {
      flexDirection: 'row', // Both buttons in the same row
      justifyContent: 'space-between',
      gap: 16, // Spacing between buttons 
    },

    // Create account text and button style
    createAccountButton: {
      fontSize: 18,
      fontWeight: '500',
      color: 'black',
      alignItems: 'center',
      textAlign: 'center',
    },

    // Sign in text and button style
    signInButton: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black',
      textAlign: 'center',
      paddingVertical: 10,
    },









    // Learn More Banner Styles


    // Gold banner style
    goldBanner: {
      backgroundColor: '#FFC629',
      marginHorizontal: 20,
      borderRadius: 12,
      padding: 24,
      marginBottom: 20,
      alignItems: 'center', //Shrink button to standard size 
    },

    // Text style for gold banner
    goldBannerText: {
      fontSize: 22, 
      fontWeight: '600', 
      color: 'black', 
      textAlign: 'center', 
      marginBottom: 20, 
      lineHeight: 25, 
    },

    // Button for Gold Banner
    goldBannerButton: {
      backgroundColor: 'white',
      borderRadius: 12,
      flex: 1,
    },

    // Learn more text and button style
    learnMoreButton: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black',
      textAlign: 'center',
      paddingVertical: 10,
    },









    

    //Styles for Recently Found Posts section

    // Section Banner (Invisible)
    postSection: {
      paddingHorizontal: 20,
      marginBottom: 20,
      height: 211,
    },

    // Posts Section Text
    postSection_Title: {
      fontSize: 20,
      fontWeight: '600',
      color: 'black',
      textAlign: 'left',
      marginBottom: 10,
      lineHeight: 24,
      marginHorizontal: 3,
    },

    // Posts Banner Row Gap
    itemGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 16,
    },

    // Placeholder to store image
    itemImagePlaceholder: {
      width: 160,
      height: 175,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0e0e0',
      borderRadius: 8,
    },

    // Text for the image placeholder
    placeholderText: {
      fontSize: 14,
      color: '#666666',
      textAlign: 'center',
    },

    // Square banner for item image placeholder
    itemCard: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#cccccc',
      marginHorizontal: 5,
    },







    // Apple Maps section styles

    mapSection: { //Banner for Map
      flex: 1,
      paddingHorizontal: 20,
      marginBottom: 20,
    },

    mapSectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: 'black',
      textAlign: 'left',
      marginBottom: 10,
      lineHeight: 24,
      marginHorizontal: 3,
    },

    //Apple Maps Integration
    mapAPI: { 
      flex: 1,
      width: 370,
      height: 300,
    },










    // Report Bug Section Styles


    // Report Bug Banner style
    bugBanner: {
      backgroundColor: '#FF1010',
      marginHorizontal: 20,
      borderRadius: 12,
      padding: 20,
      marginBottom: 20,
      alignItems: 'center', 
    },

    // Text style for report bug banner
    bugBannerText: {
      fontSize: 22, 
      fontWeight: '600', 
      color: 'black', 
      textAlign: 'center', 
      marginBottom: 20, 
      lineHeight: 25, 
    },

    // Button for Report Bug Banner
    bugBannerButton: {
      backgroundColor: 'white',
      borderRadius: 12,
      flex: 1,
    },

    // Report bug text and button style
    reportBugButton: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black',
      textAlign: 'center',
      paddingVertical: 6,
    },

    
  });

  export default Home;