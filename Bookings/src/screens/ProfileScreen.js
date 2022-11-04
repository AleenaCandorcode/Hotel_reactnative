import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import PhoneInput from 'react-native-phone-number-input'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RadioButton } from 'react-native-paper';


export default function ProfileScreen({navigation}) {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [checked, setChecked] = React.useState('first');


  return (
    <View style={{ flex: 1, padding: 30, backgroundColor: 'white' }}>

      <View style={{ flexDirection: 'row', paddingBottom: 40 }}>
        <Icon
          name="arrow-back-ios"
          size={28}
          color={"black"}
          onPress={navigation.goBack}
        />
        <Text style={{ color: "black", fontWeight: 'bold', fontSize: 22, marginLeft: 40 }}>My Profile</Text>
        <Text style={{ color: "blue", fontWeight: 'bold', fontSize: 15, padding: 5,marginLeft: 120 }}>SAVE</Text>
      </View>
      <ScrollView>
        <View>
          <TouchableOpacity>
            <Image />
            <Icon
          name="ios-add"
          size={28}
          color={"black"}
          onPress={navigation.goBack}
        />
          </TouchableOpacity>
        </View>
        
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 20 }}>PERSONAL INFORMATION</Text>
          <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ padding: 5, fontSize: 18, color: 'black' }}>Male</Text>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
            <Text style={{ padding: 5, fontSize: 18, color: 'black' }}>Female</Text>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>
        </View>
          <View style={{ paddingTop: 20, paddingBottom: 10 }}>
            {/* <Text style={{ paddingBottom: 10, paddingTop: 10 }}>First Name</Text> */}
            <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, height: 55 }}>
              <TextInput
                paddingLeft={15}
                placeholder='First name' />
            </View>
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            {/* <Text style={{ paddingBottom: 10, paddingTop: 10 }}>Last Name</Text> */}
            <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, height: 55 }}>
              <TextInput
                paddingLeft={15}
                placeholder='Last name' />
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 10, paddingTop: 10 }}>ACCOUNT INFORMATION</Text>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            {/* <Text style={{ paddingBottom: 10, paddingTop: 10 }}>Email</Text> */}
            <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, height: 55 }}>
              <TextInput
                paddingLeft={15}
                placeholder='Email Address' />
            </View>
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            {/* <Text style={{ paddingTop: 10 }}>Phone No.</Text> */}
            <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, height: 67 }}>
              <PhoneInput style={{
                backgroundColor: '#FFF',
                placeholder: "Enter Phone Number",
                // defaultCountry: "IN",
              }}
                defaultvalue={phoneNumber}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{ marginLeft: 130, flexDirection: 'row' }}
      >
        <Icon
          name="logout"
          size={20}
          color={"red"}
          onPress={navigation.goBack}
        />
        <Text style={{ fontWeight: 'bold', paddingLeft: 10, fontSize: 14 }}>Logout</Text>
      </View>
    </View>
  )
}