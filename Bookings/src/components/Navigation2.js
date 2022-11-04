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
import SettingsScreen from "../screens/SettingsScreen";
import SupportScreen from "../screens/SupportScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from "../screens/DrawerContent";
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";
import ResetPassword from "../screens/ResetPassword";
import Reset from "../screens/Reset";

import RootStackScreen from "../screens/RootStackScreen";

// import Feather from 'react-native-vector-icons/Feather';


// const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();

// const RootStack = createNativeStackNavigator();

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => {
  <RootStack.Navigator 
  headerMode='none'
  >
    {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
  </RootStack.Navigator>
}

const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff',
            headerLeft: () => {
                <Feather name="menu" size={22} color={"white"} />
            }
        }}
    >
        <HomeStack.Screen
        />
    </HomeStack.Navigator>

);


const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator>
        <DetailsStack.Screen
            name="Details"
            component={DetailsScreen}
        />
    </DetailsStack.Navigator>

);


const Navigation = (navigation) => {

    return (
        <NavigationContainer>

            {/* <RootStack.Navigator
                headerMode='float'
            >
                <RootStack.Screen name="SplashScreen" component={SplashScreen} />
                <RootStack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
                <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
                <RootStack.Screen name="Home" component={HomeScreen} />

            </RootStack.Navigator> */}

            <RootStackScreen />

            {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
            initialRouteName="Home"
            screenOptions={{
                
                headerStyle: {
                    backgroundColor: '#009387'
                },
                
            }}
       >
                <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
                <Drawer.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
                <Drawer.Screen name="Profile" component={ProfileScreen} 
                options={{headerShown: false}}
                />
                <Drawer.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
                <Drawer.Screen name="Support" component={SupportScreen} options={{headerShown: false}}/>


            </Drawer.Navigator> */}

        </NavigationContainer>

    )
}

export default Navigation;