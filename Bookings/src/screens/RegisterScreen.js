import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";
import Feather from 'react-native-vector-icons/Feather';
import { useUserRegisterMutation } from '../../services/authentication';
import { ScrollView } from "react-native-gesture-handler";

const RegisterScreen = ({navigation}) => {
    const [username,setUserName] = useState(null);
    const [lastname,setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [password2,setPassword2] = useState(null);

    const val = useContext(AuthContext);

    const [userRegister] = useUserRegisterMutation()
    const handleForSubmit = async () => {
      const formData = {username,email,password,password2}
      const res = await userRegister(formData)
      console.log(res)
      if (res.data.token){
        navigation.navigate('Login')
        console.log(res.data)
      }

      
    }

    return (
        <View>
                        <ScrollView>

            <View>
            <Image
                    style={styles.loginimg}
                    source={require('../assets/signup.png')}
                // resizeMode='center' 
                >
                  
                </Image>
                <Text style={{fontSize: 35, fontWeight: 'bold', color:"black", marginLeft: 30, marginTop: 20}}>Sign up</Text>
            </View>

          <View style={styles.inputView}>

            <View style={styles.emailView}>
              <Feather name="user" size={16} color={"grey"}/>
              <TextInput 
              value={username}
              placeholder="enter first name"
              onChangeText={text => setUserName(text)}
              />
            </View>

            <View style={styles.emailView}>
              <Feather name="user" size={16} color={"grey"}/>
              <TextInput 
              value={lastname}
              placeholder="enter last name"
              onChangeText={text => setLastName(text)}
              />
            </View>

            <View style={styles.emailView}>
              <Feather name="mail" size={16} color={"grey"}/>
              <TextInput 
              value={email}
              placeholder="enter email"
              onChangeText={text => setEmail(text)} 
              autoCapitalize="none"
              />
            </View>

            <View style={styles.emailView}>
              <Feather name="lock" size={16} color={"grey"}/>
              <TextInput 
              value={password}
              placeholder="enter password"
              onChangeText={text => setPassword(text)} 
              secureTextEntry
              />
            </View>
            <View style={styles.emailView}>
              <Feather name="lock" size={16} color={"grey"}/>
              <TextInput 
              value={password2}
              placeholder="confirm password"
              onChangeText={text => setPassword2(text)} 
              secureTextEntry
              />
            </View>
            <View marginTop={15}>
                <TouchableOpacity  
                onPress={handleForSubmit}>
                <View style={styles.continue}>
                    <Text style={{fontSize: 18,
                // lineHeight: 18 * 1.4,
                color: 'white',}}>Continue</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', paddingBottom: 60, paddingTop: 40 }}>
                <Text>Joined us before?</Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
           </View>

    </View>
    </ScrollView>

</View>
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
    width: 385,
    height: 330,
},
  continue: { 
    // backgroundColor: '#009387',
    backgroundColor: '#85219C',
        borderRadius: 8,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        marginTop: 5,
  },
    link: {
      // color: '#009387',
      color: '#85219C',
      marginLeft: 5

    },
    inputView: {
      // height: 70,
      marginTop: 0,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
      // borderRadius : 10,
      marginVertical: 20, 
      // justifyContent: 'center'
  },
  emailView: {
    // backgroundColor: 'white',
    borderBottomColor: "grey",
    // borderWidth: 1,
    // borderRadius: 5,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: "center"
},
  });

export default RegisterScreen;