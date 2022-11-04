import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { DrawerContent } from "../screens/DrawerContent";
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();


const DrawerNavigation = ( navigation ) => {

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Drawer.Screen name="Profile" component={ProfileScreen} 
                // options={{headerShown: false}}
                /> 
                
                
            </Drawer.Navigator>
            </NavigationContainer>
    )}

export default DrawerNavigation;