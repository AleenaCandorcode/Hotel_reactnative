import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function ResetPassword() {
    return (
        <View style={{ marginTop: 50, backgroundColor: 'white' }}>
            <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center', marginTop: 30, backgroundColor: 'white' }}>
                <ImageBackground
                    style={styles.loginimg}
                    source={require('../assets/reset.png')}
                // resizeMode='center' 
                >
                    <View style={styles.header}>
                        <Icon
                            name="arrow-back-ios"
                            size={28}
                            color={"black"}
                            // onPress={navigation.goBack}
                        />
                        <Icon name="bookmark-border" size={28} color={"white"} />
                    </View>
                </ImageBackground>
                <View style={{ marginLeft: -140, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 35, color: 'black' }}>Forgot</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 35, color: 'black' }}>Password.?</Text>
                </View>
            </View>
            <View style={{ marginTop: 30, marginLeft: 30, marginRight: 30 }}>
                <Text>No worries, We will sent you a text Verification code</Text>
                {/* <Text>Enter email</Text> */}
                <View style={{ marginTop: 20, marginBottom: 10, borderRadius: 15, backgroundColor: '#E4E5E8', marginRight: 10, paddingLeft: 10 }}>
                    {/* <TextInput placeholder='user@gmail.com'></TextInput> 
                    */}
                    <TextInput placeholder='@ email ID / Mobile number'></TextInput>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Verification', { phoneNumber })}>
                        <View style={styles.send}>
                            <Text style={{
                                fontSize: 18,
                                lineHeight: 18 * 1.4,
                                color: 'white',
                            }}>Send</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginimg: {
        // marginTop: 50,
        width: 385,
        height: 300,
    },
    send: {
        backgroundColor: '#069A8E',
        borderRadius: 8,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: 45,
        marginTop: 15,
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
      },
})