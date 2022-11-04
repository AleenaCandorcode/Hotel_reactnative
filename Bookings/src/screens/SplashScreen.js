import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    // navigation.replace('Home')
        navigation.replace('LoginScreen')
    // navigation.replace('AuthStack')

  }, 3000)

  return (

    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'white'}
        translucent
      />
      <Image
      // source={{uri: 'https://www.seekpng.com/png/detail/19-190761_simple-location-map-pin-icon-location-pin-green.png'}}
        source={require('../assets/earth.png')} 
        resizeMode='center' />
      {/* <Text>HomeStay</Text> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff',
  },
  image: {
    Height: 20,
    Width: 5,
  },
});

export default SplashScreen;
