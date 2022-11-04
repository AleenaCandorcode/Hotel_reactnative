import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { 
    DrawerContentScrollView, 
    DrawerItem 
} from '@react-navigation/drawer'
import {
    Title,
    Drawer,
    Avatar,
    Caption
} from 'react-native-paper'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import Feather from 'react-native-vector-icons/Feather';



export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://assets.materialup.com/uploads/e4b80140-d130-434b-bd08-eb71bc34335b/preview.png'
                                }}
                                size={70}
                            />
                            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                                <Title style={styles.title}>Hey Aleena</Title>
                                <Caption style={styles.caption}>aleena@gmail.com</Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}
                    // onPress={() => navigation.navigate('Profile')}
                    >
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Feather
                                    name="home"
                                    size={22}
                                    color={"black"} />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Feather
                                    name="user"
                                    size={22}
                                    color={"black"} />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Feather
                                    name="settings"
                                    size={22}
                                    color={"black"} />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Feather
                                    name="user"
                                    size={22}
                                    color={"black"} />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Support')}}
                        />
                    </Drawer.Section>

                </View>

                {/* <View>
                <View style={{backgroundColor: 'transparent'}}>
                    <Title style={{color: 'green', padding: 20}}>Hello.!</Title>
                </View>
                
                <Drawer.Section
                // onPress={() => navigation.navigate('Profile')}
                >
                    <DrawerItem
                    label={'Profile'}
                    paddingLeft={10}
                    // icon={({color, size}) => (
                    // <Feather 
                    // name="smile" 
                    // size={22} 
                    // color={"black"} />
                    // )}
                    // label="Profile"
                    onPress={() => navigation.navigate('Profile')}
                    />
                </Drawer.Section>

                <Drawer.Section
                // onPress={() => navigation.navigate('Profile')}
                >
                    <DrawerItem
                    label={'Home'}
                    paddingLeft={10}
                    // icon={({color, size}) => (
                    // <Feather 
                    // name="user" 
                    // size={22} 
                    // color={"black"} />
                    // )}
                    // label="Home"
                    // onPress={() => navigation.navigate('Profile')}
                    />
                </Drawer.Section>


            </View> */}
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Feather
                            name="log-out"
                            size={22}
                            color={"black"} />
                    )}
                    label="Sign Out"
                />
            </Drawer.Section>
        </View>
    )
}


export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    // perference: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingVertical: 12,
    //     paddingHorizontal: 16,
    // },

})

