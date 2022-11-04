import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import { AuthContext } from "../context/AuthContext";
import Feather from 'react-native-vector-icons/Feather';
import { useUserLoginMutation } from "../../services/authentication";
import { SafeAreaView } from "react-native-safe-area-context";


const LoginScreen = ({ navigation }) => {

    const [username, setUserName] = useState(null);
    // const [email, setEmail] = useState(null);

    const [password, setPassword] = useState(null);
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })
    const [ isPasswordShow, setIsPasswordShow] = useState(null);

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const val = useContext(AuthContext);


    const [userLogin] = useUserLoginMutation()
    const handleForSubmit = async () => {
        const formData = { username, password }
        const res = await userLogin(formData)
        console.log(res)
        if (res.data.token) {
            // console.log(res.data)
            navigation.navigate('Home')
            console.log(res.data.token)

        } else {
            alert("please enter")
            // navigation.navigate('Register')
        }


    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={'white'}
                    translucent
                />
                <Image
                    // source={{uri: 'https://www.seekpng.com/png/detail/19-190761_simple-location-map-pin-icon-location-pin-green.png'}}
                    style={styles.loginimg}
                    source={require('../assets/login.png')}
                // resizeMode='center' 
                />
                {/* <Text>HomeStay</Text> */}

            </View>
            {/* <StatusBar translucent backgroundColor="yellow" /> */}
            <Text style={styles.welcome}>Login</Text>
            {/* <Text style={styles.welcome}>Hey!</Text>
            <Text style={{ fontSize: 35, fontWeight: 'bold', color: "black", marginLeft: 30, marginRight: 20 }}>Amazing deals are just a step away</Text> */}
            <View>
                {/* <Text>{val}</Text> */}

                {/* 
                <View style={styles.action}>
                    <Feather name="user" size={16} color={"grey"} />
                    <TextInput
                        value={username}
                        placeholder="enter name"
                        // autoCapitalize="none"
                        onChangeText={text => setUserName(text)}
                    />

                    <View style={{ marginLeft: 200, }}>
                        <Feather name="check-circle" size={16} color={"green"} />
                    </View>

                </View>

                <View
                // style={styles.action}
                >
                    <View style={{flexDirection: 'row'}}>
                    <Feather name="lock" size={16} color={"grey"} />
                    <View style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        // backgroundColor: 'white',
                        borderBottomColor: "grey",
                        // borderWidth: 1,
                        // borderRadius: 5,
                        borderBottomWidth: 1,
                        paddingHorizontal: 10,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: "center",
                        paddingLeft: 10
                    }}>
                        <TextInput
                            value={password}
                            placeholder="enter password"
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                        />
                    </View>
                    
                    </View>
                    <View
                    // style={{marginRight: 160,}}
                    >
                        <Feather name="eye-off" size={16} color={"green"} />
                    </View>
                </View> */}

                <View style={styles.action}>
                    <Feather name="user" size={18} color={"grey"} />
                    <TextInput
                        value={username}
                        placeholder="enter name"
                        onChangeText={text => setUserName(text)}
                        style={styles.textInput}
                    // onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Feather name="check-circle" size={16} color={"green"} />
                        : null}
                </View>

                <View style={styles.action}>
                    <Feather name="lock" size={18} color={"grey"} />
                    <TextInput
                        value={password}
                        placeholder="enter password"
                        onChangeText={text => setPassword(text)}
                        // secureTextEntry
                        secureTextEntry={isPasswordShow ? false : true}
                        style={styles.textInput}
                    />
                    <Feather 
                    name={isPasswordShow ? 'eye' : 'eye-off'}

                    // name="eye-off" 
                    size={16} color={"grey"} 
                    onPress={() => 
                    setIsPasswordShow(!isPasswordShow)}
                    />
                </View>

                <View marginTop={25} borderRadius={8} >
                    <TouchableOpacity
                        onPress={handleForSubmit}>
                        <View style={styles.continue}>
                            <Text style={{
                                fontSize: 18,
                                // lineHeight: 18 * 1.4,
                                color: 'white',
                            }}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 35}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 230 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                        <Text style={styles.link}>Forgot Password.?</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                    <View style={styles.line}></View>
                    <Text style={{ fontWeight: 'bold', marginHorizontal: 5 }}>OR</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.logo}>
                    {/* <Image
                        source={{ uri: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-768x480.png' }}
                        style={{ width: 44, height: 44 }}
                    /> */}

                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png' }}
                        style={{ width: 29, height: 29 }}
                    />
                    <Text style={{ fontWeight: 'bold', marginHorizontal: 20 }}>Login with Google</Text>
                    {/* <Image
                        source={{ uri: 'https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png' }}
                        style={{ width: 40, height: 40, marginLeft: 40 }}
                    /> */}
                </View>
                <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginLeft: 35, paddingBottom: 60, paddingTop: 20 }}>
                    <Text>Not a member?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>Register now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 35,
        fontWeight: 'bold',
        color: "black",
        marginTop: 10,
        marginLeft: 30,
    },
    loginimg: {
        // marginTop: 50,
        width: 390,
        height: 240,
    },

    continue: {
        backgroundColor: '#009387',
        borderRadius: 8,
        marginHorizontal: 37,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 45,
        marginTop: 5,
    },
    link: {
        color: '#009387',
        marginLeft: 5,
    },
    // inputView: {
    //     height: 70,
    //     marginTop: 180,
    //     marginLeft: 30,
    //     marginRight: 25,
    //     margin: 10,
    //     borderRadius: 10,
    //     marginVertical: 20,
    //     justifyContent: 'center',
    // },
    action: {
        flexDirection: 'row',
        marginTop: 25,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingBottom: 1,
        paddingTop: 5,
        marginLeft: 40,
        marginRight: 40
    },
    textInput: {
        flex: 1,
        marginTop: -14,
        paddingLeft: 10,
        color: 'black'
    },

    // action: {
    //     // backgroundColor: 'white',
    //     borderBottomColor: "grey",
    //     // borderWidth: 1,
    //     // borderRadius: 5,
    //     borderBottomWidth: 1,
    //     paddingHorizontal: 10,
    //     marginVertical: 10,
    //     flexDirection: 'row',
    //     alignItems: "center",
    //     paddingLeft: 10
    // },
    line: {
        height: 1,
        width: 30,
        color: 'grey',
        backgroundColor: 'grey'
    },
    logo: {
        width: '80%',
        height: 55,
        marginHorizontal: 37,
        borderRadius: 8,
        backgroundColor: '#f0f8f8',
        // marginVertical: 10,
        flexDirection: 'row',
        // marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 20
    }

});




export default LoginScreen;