import React,{useRef, useState}  from 'react';
import {View, Text, StyleSheet,StatusBar,Image,TextInput,TouchableOpacity,} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const VerificationScreen = ({navigation}) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
    return (
      <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'white'}
        translucent
      />
      <View style={styles.headerContainer}>
        <Feather
          name="chevron-left"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.content}>OTP Verification</Text>

      </View>
            <View marginLeft={130} f>
            <Text fontSize={30}>Enter the OTP number</Text>  
            </View>
      <View style={styles.otpContainer}>

        <View style={styles.otpBox}> 
        <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
          </View>
          <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
          </View>
          <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
          </View>
          <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
            }}
          />
          </View>
        </View>
        <View style={{marginLeft: 120, marginBottom: 20}}>
                <Text>Dont receive an OTP code? </Text>
                <TouchableOpacity 
                // onPress={() => navigation.navigate('')}
                >
                    <Text style={styles.link}>Resent code</Text>
                </TouchableOpacity>
           </View>
        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signinButtonText}
            onPress={() => navigation.navigate("Register")}>Verify</Text>
        </TouchableOpacity>
        </View>
    );
  };
  
  export default VerificationScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 50,
    },
    headerTitle: {
      fontSize: 20,
      lineHeight: 20 * 1.4,
    //   width: Display.setWidth(80),
      textAlign: 'center',
    },
    title: {
      fontSize: 20,
      lineHeight: 20 * 1.4,
      marginTop: 50,
      marginBottom: 10,
      marginHorizontal: 20,
    },
    otpContainer: {
      marginHorizontal: 30,
      marginBottom: 30,
      marginTop: 30,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
    },
    content: {
      fontSize: 20,
      marginTop: 15,
      marginBottom: 20,
      marginHorizontal: 80,
    },
    otpBox: {
      borderRadius: 8,
      marginTop: 100,
      borderColor: 'black',
      borderWidth: 0.8,
    },
    otpText: {
      fontSize: 20,
      color: 'black',
      padding: 0,
      textAlign: 'center',
      paddingHorizontal: 18,
      paddingVertical: 10,
    },
    link: {
        color: 'orange',
        marginLeft: 5,
        marginLeft: 40,
        fontWeight: 'bold',
      },
    signinButton: {
      backgroundColor: 'orangered',
      borderRadius: 8,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: 50,
      width: '75%',
      height: 45,
    },
    signinButtonText: {
      fontSize: 18,
      lineHeight: 18 * 1.4,
      color: 'white',
    },
  });
  
