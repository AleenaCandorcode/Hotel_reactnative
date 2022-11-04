import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import {  } from 'react-native-paper'

export default function Reset() {
    return (
        <SafeAreaView>
            <View>
                <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>Create New Password.?</Text>
                </View>
                <View style={{ marginTop: 60, marginLeft: 30, marginRight: 30 }}>
                    <Text style={{ fontSize: 16, paddingBottom: 10 }}>Enter your new password</Text>
                    <View style={{ marginTop: 10, marginBottom: 10, borderRadius: 15, backgroundColor: 'white', paddingLeft: 10}}>
                        <TextInput
                            placeholder='Password' />
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 10, borderRadius: 15, backgroundColor: 'white', paddingLeft: 10}}>
                        <TextInput
                            placeholder='Confirm password' />
                    </View>

                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Verification', { phoneNumber })}>
                        <View style={styles.send}>
                            <Text style={{
                                fontSize: 18,
                                lineHeight: 18 * 1.4,
                                color: 'white',
                            }}>Reset</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    send: {
        backgroundColor: '#069A8E',
        borderRadius: 8, 
        marginHorizontal: 30, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '83%', 
        height: 45,
        marginTop: 25
}
})