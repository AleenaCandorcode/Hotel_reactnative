import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from "../screens/SplashScreen";

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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

export default RootStackScreen;