import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../screens/SplashScreen";
import CountryCode from "../screens/CountryCode";
import VerificationScreen from "../screens/VerificationScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ReviewBooking from "../screens/ReviewBooking";
import GuestsScreen from "../screens/GuestsScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "../screens/DrawerContent";
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";
import DrawerNavigation from "./DrawerNavigation";


const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();


const StackNavigation = (navigation) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                {/* <Stack.Screen name="Splash" 
    component={SplashScreen} 
    options={{headerShown: false}}
    /> */}

                {/* <Stack.Screen name="Country" 
    component={CountryCode} 
    options={{headerShown: false}}
    /> */}

                {/* <Stack.Screen name="Verification" 
    component={VerificationScreen} 
    options={{headerShown: false}}
    /> */}


                {/* <Stack.Screen 
    name="Login" 
    component={LoginScreen} 
    options={{headerShown: false}}
    /> */}

                {/* <Stack.Screen 
    name="Register" 
    component={RegisterScreen} 
    options={{headerShown: false}}
    /> */}

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ headerShown: false }}
                />

                {/* <Stack.Screen 
    name="Profile" 
    component={ProfileScreen}
    options={{
        title: 'My Profile',
        headerStyle: {
            backgroundColor: '#069A8E',
        },
        headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
        headerLeft: () => (
        <View style={{marginRight: 20}}>
            <Icon name="arrow-left" size={20} color="#fff" 
        // onPress={() => navigation.navigate('Profile')}
        />
        </View>
          ),
        headerRight: () => (
            <View>
                <TouchableOpacity>
                    <Text style={{color: 'lightgrey', fontWeight:'500', fontSize: 15, padding: 10}}>Save</Text>
                </TouchableOpacity>
            </View>
              ),
        }}
    /> */}



                {/* <Stack.Screen
    name="Review"
    component={ReviewBooking}
    options={{
    title: 'Review Booking',
    headerStyle: {
        backgroundColor: '#069A8E',
    },
    headerTintColor: '#fff',
    // headerTitleStyle: {
    //     fontWeight: 'bold',
    // },
    headerLeft: () => (
    <View style={{marginRight: 20}}>
        <Icon name="arrow-left" size={20} color="#fff" 
    onPress={() => navigation.navigate('Details')}
    />
    </View>
      ),
    }}
/> */}

                {/* <Stack.Screen
    name="Guests"
    component={GuestsScreen}
    options={{
    title: 'How many peoples.?',
    headerStyle: {
        backgroundColor: '#069A8E',
    },
    headerTintColor: '#fff',
    // headerTitleStyle: {
    //     fontWeight: 'bold',
    // },
    headerLeft: () => (
    <View style={{marginRight: 20}}>
        <Icon name="arrow-left" size={20} color="#fff" 
    // onPress={() => navigation.navigate('Guests')}
    />
    </View>
      ),
    }}
/> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;