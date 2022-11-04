import * as React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Button, Image, FlatList, ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomSheet from 'react-native-simple-bottom-sheet';
import GuestsScreen from './GuestsScreen';
import Mock from '../consts/Mock';
import Images from '../consts/Images';

import CategoryMenu from '../components/CategoryMenu'
import categories from '../consts/categories';
import hotels from '../consts/hotel';



export default function HomeScreen(navigation) {

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = (navigation) => {
    return <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer}
    >
      {categories.map((category, index) => (
        <TouchableOpacity key={index} activeOpacity={0.8}>
          <View style={{
            backgroundColor: selectedCategoryIndex == index
              ? '#f0f8ff'
              : '#f0f8ff',
            ...styles.categoryBtn
          }}>
            <View style={styles.categoryBtnImgCon}>
              <Image source={category.image} style={{ height: 85, width: 85, resizeMode: 'cover', borderRadius: 60 }} />
            </View>
            <Text style={{ padding: 15, color: 'black' }}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>

  }

  const panelRef = useRef(null);

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

  const refRBSheet = useRef();

  const TopHotelCard = ({ navigation,hotel }) => {
    return (
      <View style={styles.topHotelCard}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          {/* <Icon name="star" size={15} color={"orange"} /> */}
          <Text style={{ color: "white", fontWeight: 'bold', fontSize: 18 }}>
            5.0
          </Text>
        </View>
        <Image style={styles.topHotelCardImage} source={hotel.image} />
        <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{hotel.name}</Text>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: "grey" }}>
            {hotel.location}
          </Text>
        </View>
      </View>
    );
  };

  // <TouchableOpacity
  //                       style={styles.topHotelCard}
  //                           onPress={() => navigation.navigate('Details')}>
  //                           {/* <Text style={{
  //                                       fontSize: 55,
  //                                       color: 'black'
  //                                   }}>Heyy</Text> */}
  //                           <View>
  //                           <View
  //                               style={{
  //                                   position: 'absolute',
  //                                   top: 5,
  //                                   right: 5,
  //                                   zIndex: 1,
  //                                   flexDirection: 'row',
  //                               }}>
  //                               {/* <Icon name="star" size={15} color={"orange"} /> */}
  //                               <Text style={{ color: "white", fontWeight: 'bold', fontSize: 18 }}>
  //                                   5.0
  //                               </Text>
  //                           </View>
  //                           <Image
  //                           // style={styles.topHotelCardImage} source={hotel.image} 
  //                           />
  //                           <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
  //                               <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
  //                                   {/* {hotel.name} */}
  //                                   Vythiri Holiday Resorts
  //                               </Text>
  //                               <Text style={{ fontSize: 10, fontWeight: 'bold', color: "grey" }}>
  //                                   {/* {hotel.location} */}
  //                                   Old Vythiri, Vythiri, Kerala
  //                               </Text>
  //                           </View>
  //                           </View>
                        // </TouchableOpacity>

  return (
    <SafeAreaView>

<View backgroundColor={"white"} borderBottomtLeftRadius={25} >
        {/* <ScrollView> */}
          <View style={styles.input}>
            <View style={styles.inputBox}>
              <Text style={styles.headingText}>Destination</Text>
              <View style={styles.inputTextBox}>
                <TextInput
                  // value={password}
                  placeholder="Search Place"
                // onChangeText={text => setPassword(text)} 
                />
              </View>
            </View>

            <View style={{ paddingBottom: 5, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
              <View style={styles.inputBox}>
                <Text style={styles.headingText}>Check-in</Text>
                <TouchableOpacity style={styles.datePickBox} onPress={showDatePicker}>
                  <View style={{ height: 40, width: 150 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>{date.toDateString()}</Text>
                  </View>
                </TouchableOpacity>
                <Text>
                  {datePicker && (
                    <DateTimePicker
                      value={date}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={true}
                      onChange={onDateSelected}
                    // style={styleSheet.datePicker}
                    />
                  )}
                  {!datePicker && (
                    <View style={{ margin: 10 }}>

                    </View>
                  )}
                </Text>
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.headingText}>Check-out</Text>
                <TouchableOpacity style={styles.datePickBox} onPress={showDatePicker}>
                  <View style={{ height: 40, width: 150 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>{date.toDateString()}</Text>
                  </View>
                </TouchableOpacity>
                <Text>
                  {datePicker && (
                    <DateTimePicker
                      value={date}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={true}
                      onChange={onDateSelected}
                    // style={styleSheet.datePicker}
                    />
                  )}
                  {!datePicker && (
                    <View style={{ margin: 20 }}>
                    </View>
                  )}
                </Text>
              </View>
            </View>


            <View style={styles.inputBox}>
              <Text style={styles.headingText}>Guests</Text>
              <TouchableOpacity
                // onPress={() => navigation.navigate('Guests')}
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                  alignContent: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                  paddingTop: 10,
                  paddingBottom: -5,
                  width: '90%'
                }}>
                <TextInput
                  placeholder='Number of Guests'
                />
              </TouchableOpacity>

            </View>
            <View marginTop={25} borderRadius={8} marginBottom={40}>
              <TouchableOpacity style={styles.datePopup}>
                <View>
                  <Text style={{
                    fontSize: 15,
                    color: 'black'
                  }}>Search</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        {/* <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >

        </RBSheet> */}

        {/* <View >

        <BottomSheet ref={ref => panelRef.current = ref}
          sliderMinHeight={10}

        >
          <ScrollView>
          <View style={{ height: 20, backgroundColor: 'white' }}>
            <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
              <Text>Toggle</Text>
            </TouchableOpacity>
          </View>
          <View backgroundColor={'#f0f8ff'}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>Popular Cities</Text>
          <ListCategories />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>Top Hotels</Text>
          <FlatList
            data={hotels}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
              marginTop: 20,
              paddingBottom: 30,
            }}
            renderItem={({ item }) => <TopHotelCard hotel={item}
              onPress={() => navigation.navigate('DetailsScreen')}
            />}
          />
        </View>
        </ScrollView>
        </BottomSheet>
      </View> */}
        {/* <View backgroundColor={'#f0f8ff'}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>Popular Cities</Text>
          <ListCategories />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>Top Hotels</Text>
          <FlatList
            data={hotels}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
              marginTop: 20,
              paddingBottom: 30,
            }}
            renderItem={({ item }) => <TopHotelCard hotel={item}
              onPress={() => navigation.navigate('DetailsScreen')}
            />}
          />
        </View> */}
        {/* </ScrollView> */}

      {/* <View>

        <BottomSheet ref={ref => panelRef.current = ref}
          sliderMinHeight={10}

        >
          <ScrollView>
            <View style={{ height: 20, backgroundColor: 'white' }}>
              <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
                <Text>Toggle</Text>
              </TouchableOpacity>
            </View>
            <View backgroundColor={'#f0f8ff'}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>Popular Cities</Text>
              <ListCategories />
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>Top Hotels</Text>
              <FlatList
                data={hotels}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingLeft: 20,
                  marginTop: 20,
                  paddingBottom: 30,
                }}
                renderItem={({ item }) => <TopHotelCard hotel={item}
                  // onPress={() => navigation.navigate('DetailsScreen')}
                />}
              />
            </View>
          </ScrollView>
        </BottomSheet>
      </View> */}
</View>
</SafeAreaView>



  )
}

const styles = StyleSheet.create({
  input: {
    // marginTop: 0,
    paddingLeft: 20,
    // paddingTop: 60,
    backgroundColor: '#069A8E',
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30
  },
  inputTextBox: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '90%',
  },
  inputBox: {
    paddingBottom: 10,
    paddingTop: 2,
    alignContent: 'center',
    justifyContent: 'center',
  },
  datePopup: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '90%',
    borderRadius: 25,
    justifyContent: 'center',
    width: '90%',
    height: 40
  },
  datePickBox: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    paddingTop: 20,
    paddingBottom: -5,
  },
  headingText: {
    // paddingTop: 20,
    color: '#DAEAF1',
    // fontWeight: 'bold'
    // padding: 5,

  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },

  locationText: {
    fontWeight: 'bold',
  },
  categoriesListContainer: {
    paddingVertical: 15,
    // alignItems: 'center',
    // paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 100,
    width: 120,
    // marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    // flexDirection: 'row',
  },
  categoryBtnImgCon: {
    padding: 20,
    height: 55,
    width: 75,
    backgroundColor: 'lightgrey',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHotelCard: {
    height: 170,
    width: 160,
    backgroundColor: "white",
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 120,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },



})
