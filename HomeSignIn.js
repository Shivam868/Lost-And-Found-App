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
const TI30_Post_Front = require('./assets/postTest/TI30_Front.jpg')
const TI30_Post_Back = require('./assets/postTest/TI30_Back.jpg')


const HomeSignIn = () => {

  const navigation = useNavigation();

  const handleLearnMore = () => {
  };


  const handlePostDetails = () => {
    navigation.navigate('postDetails')
  }


  const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
      setSearchText(text);
      onSearch(text);
    };

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
      title: 'Joe Mack Wilson Student Center',
      description: 'Location: 2nd Floor Main Lobby',
      coordinate: {
        latitude: 33.94077,
        longitude: -84.52051,
      },
    },

    {
      id: 2,
      title: 'Carmichael Student Center',
      description: 'Location: Room 274',
      coordinate: {
        latitude: 34.03832,
        longitude: -84.58299,
      },
    },

    {
      id: 3,
      title: 'Burruss Building',
      description: 'Location: Room 255',
      coordinate: {
        latitude: 34.03939,
        longitude: -84.58192,
      },
    },

    {
      id: 4,
      title: 'Kennesaw Hall',
      description: 'Location: Room 2005',
      coordinate: {
        latitude: 34.03863,
        longitude: -84.58070,
      },
    },

    {
      id: 5,
      title: 'Student Recreation & Activities Center',
      description: 'Location: Front Desk',
      coordinate: {
        latitude: 34.03698,
        longitude: -84.58231,
      },
    },

    {
      id: 6,
      title: 'Math & Statistics Building',
      description: 'Location: Room 507',
      coordinate: {
        latitude: 34.03772,
        longitude: -84.58393,
      },
    },

    {
      id: 7,
      title: 'Social Science Building',
      description: 'Location: Room 4057',
      coordinate: {
        latitude: 34.03871,
        longitude: -84.58530,
      },
    },

    {
      id: 8,
      title: 'Convocation Center',
      description: 'Location: Room 3003',
      coordinate: {
        latitude: 34.03688,
        longitude: -84.58041,
      },
    },

    {
      id: 9,
      title: 'Horace W. Sturgis Library',
      description: 'Location: Circulation Desk',
      coordinate: {
        latitude: 34.03828,
        longitude: -84.58379,
      },
    },

    {
      id: 10,
      title: 'University College',
      description: 'Location: Room UC102A',
      coordinate: {
        latitude: 34.03882,
        longitude: -84.58398,
      },
    },

    {
      id: 11,
      title: 'Commons Building',
      description: 'Location: Lobby Office',
      coordinate: {
        latitude: 34.03999,
        longitude: -84.58213,
      },
    },

    {
      id: 12,
      title: 'Music Building',
      description: 'Location: Room MU111',
      coordinate: {
        latitude: 34.04019,
        longitude: -84.58287,
      },
    },

    {
      id: 13,
      title: 'Wellness Center',
      description: 'Location: Room UC102A',
      coordinate: {
        latitude: 34.03752,
        longitude: -84.58201,
      },
    },

    {
      id: 14,
      title: 'Visual Arts Building',
      description: 'Location: Room VA202',
      coordinate: {
        latitude: 34.04006,
        longitude: -84.58517,
      },
    },

    {
      id: 15,
      title: 'Prillaman Hall',
      description: 'Location: Room 3015',
      coordinate: {
        latitude: 34.04042,
        longitude: -84.58226,
      },
    },

    {
      id: 16,
      title: 'English Building',
      description: 'Location: Room 155',
      coordinate: {
        latitude: 34.03931,
        longitude: -84.58398,
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





      {/* Search History Posts Banner */}

      <View style = {styles.postSection}>
        <Text style = {styles.postSection_Title}>
          Continue Searching
        </Text>


        <ScrollView horizontal = {true} style = {styles.horizontalScrollview}>
        <View style = {styles.itemGrid}>
          <View style = {styles.itemCard}>
            <TouchableOpacity style = {styles.imageButton} onPress = {handlePostDetails} >
            <Image
                source={TI30_Post_Front}
                style={styles.itemImagePlaceholder} 
                resizeMode="cover"
              />
            </TouchableOpacity>  
          </View>

        
          <View style = {styles.itemCard}>
            <View style = {styles.itemImagePlaceholder}>
              <Text style = {styles.placeholderText}>
                Item{'\n'}Image
              </Text>
            </View>
          </View>


          <View style = {styles.itemCard}>
            <View style = {styles.itemImagePlaceholder}>
              <Text style = {styles.placeholderText}>
                Item{'\n'}Image
              </Text>
            </View>
          </View>


          <View style = {styles.itemCard}>
            <View style = {styles.itemImagePlaceholder}>
              <Text style = {styles.placeholderText}>
                Item{'\n'}Image
              </Text>
            </View>
          </View>
        </View>
        </ScrollView>
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
      backgroundColor: '#ffffff'
    },

    horizontalScrollview: {
      height: 122, //Adjust the display height of horizontal scrolling
    },



    // Scroll for entire app
    outerScrollview: {
      paddingVertical: 20,
    },


    //App Title Styles

    appTitleSection: {
      backgroundColor: '#ffffff',
    },

    appName: {
      fontSize: 35,
      fontWeight: '600',
      textAlign: 'left',
      marginHorizontal: 12,
    },

    //Search Bar Styles

    searchBar: {
      padding: 10,
      backgroundColor: '#ffffff',
      marginHorizontal: 10,
    },

    searchInput: {
      height: 40,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
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


    // White Button Default Style (Works on all buttons)
    whiteButton: {
      backgroundColor: 'white',
      paddingVertical: 12, // Spacing between top and bottom sides
      paddingHorizontal: 24, // Spacing between left and right sides
      borderRadius: 8,
      flex: 1,
      alignItems: 'center',
    },

    // Learn More Banner Styles


    // Gold banner style
    goldBanner: {
      backgroundColor: '#FFC629',
      marginHorizontal: 20,
      borderRadius: 12,
      padding: 24,
      marginBottom: 20,
      marginVertical: 5,
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

    imageButton: {
      width: 160,
      height: 175,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0e0e0',
      borderRadius: 8,
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

  export default HomeSignIn;