import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Pressable
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import hotels from '../consts/hotel';
import PhoneInput from 'react-native-phone-number-input'

import Collapsible from 'react-native-collapsible';
import Feather from 'react-native-vector-icons/Feather';



export default function DetailsScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState(null);

  const [collapsed, setCollapsed] = useState(true);


  const toggleExpanded = () => {
    // Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "white",
          paddingBottom: 10,
        }}
      >
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <ImageBackground style={style.headerImage}
          source={{ uri: 'https://www.wayanad.com/vythiriresorts/im/bann.jpg' }}
        >
          <View style={style.header}>
            <Icon
              name="arrow-back-ios"
              size={28}
              color={"white"}
              onPress={navigation.goBack}
            />
            <Icon name="bookmark-border" size={28} color={"white"} />
          </View>
        </ImageBackground>
        <View>
          <View style={style.iconContainer}>
            <Icon name="place" color={"white"} size={28} />
          </View>
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <Text style={{
              fontSize: 20, fontWeight: 'bold', color: 'black'
            }}>
              {/* {item.name} */}
              Vythiri Holiday Resorts
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: "grey",
                marginTop: 5,
              }}>
              Old Vythiri, Vythiri, Kerala              {/* {item.location} */}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="star" size={20} color={"orange"} />
                  <Icon name="star" size={20} color={"orange"} />
                  <Icon name="star" size={20} color={"orange"} />
                  <Icon name="star" size={20} color={"orange"} />
                  <Icon name="star" size={20} color={"grey"} />
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5 }}>
                  4.0
                </Text>
              </View>
              <Text style={{ fontSize: 13, color: "grey" }}>365reviews</Text>
            </View>


            {/* <TouchableOpacity onPress={toggleExpanded}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'lightgrey',borderTopWidth: 1, borderTopColor: 'lightgrey', padding: 10}}>
                <Text style={{
                  fontSize: 20, fontWeight: 'bold', color: 'black', paddingBottom: 5
                }}>
                  About Hotel
                  
                </Text>
                <Feather name="chevron-right" size={30} color={"black"} />
                

              </View>
            </TouchableOpacity>
            <Collapsible
              collapsed={collapsed}
              align="center"
            >
              <View>
                <Text style={{ lineHeight: 20, color: "grey" }}>
                  Spanning across 12 acres of greenery, Grand Hyatt Residences is well connected to the business district of Bandra Kurla Complex and Mumbai Airport.
                </Text>
              </View>
            </Collapsible> */}


            <View style={{ marginTop: 20, paddingRight: 20 }}>
              <Text style={{ lineHeight: 20, color: "grey", paddingBottom: 15 }}>
                Vythiri Holiday Resort features a restaurant, outdoor swimming pool, a fitness centre and garden in Vythiri. Featuring family rooms, this property also provides guests with a children's playground.
              </Text>
            </View>
          </View>

        </View>

        <TouchableOpacity onPress={toggleExpanded}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderTopColor: 'lightgrey', padding: 10, marginLeft: 15, marginRight: 20 }}>
            <Text style={{
              fontSize: 20, fontWeight: 'bold', color: 'black', paddingBottom: 5
            }}>
              Amenities
            </Text>
            <Feather name="chevron-right" size={30} color={"black"} />
          </View>
        </TouchableOpacity>
        <Collapsible
          collapsed={collapsed}
          align="center"
        >
          <View style={{paddingLeft: 20, paddingTop: 10}}>

            <FlatList
              data={[
                { key: 'Free Wifi' },
                { key: 'Free Breakfast' },
                { key: 'Ac Room' },
                { key: 'Queen Bed' },
                { key: 'Room Service' },
                { key: 'Flat Screen Tv' },
                // { key: 'Ironing Board' },
              ]}
              renderItem={({ item }) => {
                return (
                  <View style={{ marginBottom: 5 }}>
                    <Text style={{ fontSize: 14, marginLeft: 5 }}>{item.key}</Text>
                  </View>
                );
              }}
            />
          </View>
        </Collapsible>

        {/* <View style={{
          paddingLeft: 20,
          paddingTop: 20,
        }}>

        </View> */}

        <TouchableOpacity onPress={toggleExpanded}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderTopColor: 'lightgrey', padding: 10, marginLeft: 15, marginRight: 20 }}>
            <Text style={{
              fontSize: 20, fontWeight: 'bold', color: 'black', paddingBottom: 5
            }}>
              Need To Know
            </Text>
            <Feather name="chevron-right" size={30} color={"black"} />
          </View>
        </TouchableOpacity>
        <Collapsible
          collapsed={collapsed}
          align="center"
        >
          <View style={{ paddingLeft: 15, paddingRight: 20 }}>

            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Local ID Policy</Text>
            <Text style={{ paddingLeft: 5 }}>Guests can check in using any local or outstation ID proof (PAN card not accepted).</Text>

            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Standard Check-In Time
              12:00 PM</Text>

            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Standard Check-Out Time
              11:00 AM</Text>

            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Early Check-In Policy
            </Text>
            <Text>Early check-in only after 10 AM is possible but can be confirmed, subject to availability upon arrival at the hotel and not in advance. For check-in prior to 10 AM, an extra half day's tariff shall be applicable.</Text>

            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Late Check-Out Policy
            </Text>
            <Text>Late check-out between 11 am and 2 pm is possible (free of charge) but can be confirmed, subject to availability, only at the time of check-out and not in advance. For check-out after 2 PM, an extra night's tariff shall be applicable.</Text>

            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Flexible Checkin and Checkout
            </Text>
            <Text>Allows guest to extend their checkin or checkout by a few hours on the same day
            </Text>

            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Couple Friendly</Text>
            <Text style={{ paddingLeft: 5 }}>Treebo Trip Happy Stay Hotels welcomes unmarried couples.</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Child Reservation Policy
            </Text>

            <Text style={{ paddingLeft: 5 }}>A maximum of 1 child upto an age of 8 years and an extra infant upto an age of 2 years is allowed free of charge, subject to room occupancy capacity. Breakfast will be included in stay but no extra bed or mattress will be provided. Extra person charges are applicable for anyone above 8 years of age. Extra person charges are also applicable for extra kids during check-in.</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Identification Card
            </Text>

            <Text style={{ paddingLeft: 5 }}>All adults must carry one of these photo ID cards at the time of check-in: Driving License, Voters Card, Passport, Ration Card or Aadhar Card. PAN Cards are not accepted.</Text>

            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Cancellation Policy</Text>
            <Text style={{ paddingLeft: 5 }}>No cancellation fee is charged if the booking is cancelled 24 hours prior to the standard check-in time. If the booking is cancelled within 24 hours of the standard check-in time for your booking, one night’s tariff shall be charged for the room(s) booked. Please note that refunds shall not be applicable for non-refundable bookings</Text>


            <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>Access to Bar, Restaurant and Swimming Pool
            </Text>
            <Text style={{ paddingLeft: 5 }}>Restaurant, bar & swimming pool will be accessible to the guests subject to government approval (If available in the property)</Text>
          </View>
        </Collapsible>

        <View style={{ width: '90%', marginLeft: 10, marginTop: 10, borderRadius: 10, padding: 10}}>
          <Text style={{
            fontSize: 20, fontWeight: 'bold', color: 'black'
          }}>Primary Traveller</Text>
          <View style={{ paddingLeft: 10 }}>
            <View style={{ borderWidth: 1, marginTop: 20, borderColor: 'lightgrey', height: 50, paddingLeft: 10 }}>
              <TextInput
                placeholder="Primary Guest Name" />
            </View>

            <View style={{ borderWidth: 1, marginTop: 20, borderColor: 'lightgrey', height: 67 }}>
              <PhoneInput style={{
                backgroundColor: '#FFF',
                placeholder: "Enter Phone Number",
              }}
                defaultvalue={phoneNumber}
              />
            </View>

            <View style={{ borderWidth: 1, marginTop: 20, borderColor: 'lightgrey', height: 50, paddingLeft: 10 }}>
              <TextInput
                value={email}
                placeholder="Enter Email"
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>


        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', marginBottom: 20, borderTopWidth: 1, borderTopColor: 'lightgrey', paddingTop: 15 }}>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>₹1500</Text>
          <Text>per night</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#069A8E',
            borderRadius: 8,
            // marginHorizontal: 120,
            marginLeft: 160,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: '35%',
            // marginBottom: 40,
            // marginTop: 20
          }}
          onPress={() => navigation.navigate('Review')}
        >
          <Text style={{ padding: 10, color: 'white', fontSize: 18, fontWeight: 'bold' }}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: "black",
    marginHorizontal: 20,
    borderRadius: 10,
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: "#7cfc00",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: "black",
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 350,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});
