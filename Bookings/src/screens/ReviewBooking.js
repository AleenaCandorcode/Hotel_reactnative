import { View, Text, TouchableOpacity, Button, TextInput, StyleSheet, FlatList, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PhoneInput from 'react-native-phone-number-input'
import { ScrollView } from 'react-native-gesture-handler'


export default function ReviewBooking() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState(null);


  return (
    <View style={{flex: 1}}>

    <ScrollView>
        <View style={{ width: '86%', marginLeft: 20, marginTop: 20, borderRadius: 10, backgroundColor: '#f8f8ff', padding: 10, flexDirection: 'row' }}>
          <ImageBackground
            style={styles.headerImage}
            source={{ uri: 'https://www.wayanad.com/vythiriresorts/im/bann.jpg' }}
          />
          <View style={{ paddingLeft: 10 }}>
            <Text style={{
              fontSize: 20, fontWeight: 'bold', color: 'black'
            }}>Vythiri Holiday Resorts</Text>
            <Text style={{ paddingTop: 5 }}>Old Vythiri, Vythiri, Kerala</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 22, paddingLeft: 10, paddingTop: 15 }}>₹1500</Text>
              <Text style={{ color: '#189B18', fontSize: 18, paddingLeft: 10, paddingTop: 18 }}>Refundable</Text>
            </View>
            <Text style={{ padding: 5 }}>Inc. of all taxes</Text>
          </View>
        </View>
        <View style={{ width: '86%', marginLeft: 20, marginTop: 20, borderRadius: 10, backgroundColor: '#f8f8ff'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
            <Text style={{ marginLeft: 5, color: 'black', fontSize: 18 }}>Dates</Text>
            <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: 20, paddingLeft: 10 }}>Sat, 15 Oct - Sun, 16 Oct</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',padding: 10 }}>
            <Text style={{ marginLeft: 5, color: 'black', fontSize: 18 }}>Guests</Text>
            <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: 20, paddingLeft: 10, }}>1 Room, 1 Adult & 0 Kid</Text>
          </View>
        </View>

        {/* <View style={{ width: '86%', marginLeft: 20, marginTop: 20, borderRadius: 10, backgroundColor: '#f8f8ff', padding: 10 }}>
          <Text style={{ marginLeft: 5, color: 'black', fontSize: 18 }}>Travel Dates & Guests</Text>
        </View> */}

        {/* <View style={{ width: '86%', marginLeft: 20, marginTop: 20, borderRadius: 10, backgroundColor: '#f8f8ff', padding: 10 }}>
          <Text style={{ marginLeft: 5, color: 'black', fontSize: 18 }}>Primary Traveller</Text>
          <View style={{ borderWidth: 1, marginTop: 20, borderColor: 'green', height: 60, paddingLeft: 10 }}>
            <TextInput
              placeholder="Primary Guest Name" />
          </View>

          <View style={{ borderWidth: 1, marginTop: 20, borderColor: 'green', height: 67 }}>
            <PhoneInput style={{
              backgroundColor: '#FFF',
              placeholder: "Enter Phone Number",
            }}
              defaultvalue={phoneNumber}
            />
          </View>

          <View style={{ borderWidth: 1, marginTop: 20, borderColor: 'green', height: 60, paddingLeft: 10 }}>
            <TextInput
              value={email}
              placeholder="Enter Email"
              onChangeText={text => setEmail(text)}
            />
          </View>
        </View> */}

        {/* <View style={{ width: '86%', marginLeft: 20, marginTop: 20, borderRadius: 10, backgroundColor: '#f8f8ff', padding: 5, backgroundColor: 'orangered' }}>
          <Text style={{ marginLeft: 5, color: 'white', fontSize: 18, backgroundColor: 'orangered', borderRadius: 5, padding: 5 }}>Important Information</Text>
          <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: '#f8f8ff', backgroundColor: '#f8f8ff', padding: 5 }}>
            <FlatList
              data={[
                { key: 'Passport, Aadhar, Driving Liscense and Govt IDs are accepted as ID Proofs' },
                { key: 'Office ID, PAN Card and Non-Govt IDs are not accepted as ID Proofs' },
                { key: 'Pets are not allowed' },
                { key: 'Cashless Payment is available' },
                { key: 'Visitors are not allowed' },
                { key: 'Cancellation and prepayment policies vary according to room type. Please check the Fare policy associatedr room' },
                { key: 'Outside food is not allowed' },
              ]}
              renderItem={({ item }) => {
                return (
                  <View style={{ marginBottom: 5 }}>
                    <Text style={{ fontSize: 12, marginLeft: 10, padding: 1 }}>{item.key}</Text>
                  </View>
                );
              }}
            />
          </View>


        </View> */}

        {/* <View style={{ width: '86%', marginLeft: 20, marginTop: 20, borderRadius: 10, backgroundColor: '#f8f8ff', padding: 10 }}>
          <View style={styles.billing}>
            <Text style={styles.billingText}>1 Room x 1 Night</Text>
          </View>

          <View style={styles.billing}>
            <Text style={styles.billingText}>Total Discount</Text>
          </View>

          <View style={styles.billing}>
            <Text style={{ marginLeft: 5, color: 'black', fontSize: 18 }}>Price after Discount</Text>
          </View>
          <View style={styles.billing}>
            <Text style={{ marginLeft: 5, color: 'black', fontSize: 18 }}>Taxes & Services Fees</Text>
          </View>
          <View style={styles.billing}>
            <Text style={{ marginLeft: 5, color: 'black', fontSize: 18 }}>Total Amount to be paid</Text>
          </View>
          <Text>Price inclusive of all taxes</Text>
        </View> */}



    </ScrollView>
    <View style={{ width: '86%', marginLeft: 20, marginTop: 10, marginBottom: 20, borderRadius: 10, backgroundColor: '#f8f8ff', padding: 1 }}>
          <TouchableOpacity>
            <View style={
              {
                backgroundColor: '#069A8E',
                borderRadius: 8,
                marginHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
                // width: '110%', 
                height: 45,
              }
            }>
              <Text style={{
                fontSize: 18,
                color: 'white',
              }}>Book Now</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
  billing: {
    borderBottomWidth: 0.5,
    padding: 10
  },
  billingText: {
    marginLeft: 5,
    color: 'black',
    fontSize: 18,
  },
  headerImage: {
    height: 100,
    width: 100,
    // borderBottomRightRadius: 40,
    // borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
})