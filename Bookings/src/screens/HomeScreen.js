import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Button, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
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

import { useNavigation } from '@react-navigation/native';


export default function HomeScreen({ navigation, hotel }) {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    // const ListCategories = (navigation) => {
    //     return <ScrollView
    //         horizontal
    //         showsHorizontalScrollIndicator={false}
    //         contentContainerStyle={styles.categoriesListContainer}
    //     >
    //         {categories.map((category, index) => (
    //             <TouchableOpacity key={index} activeOpacity={0.8}>
    //                 <View style={{
    //                     backgroundColor: selectedCategoryIndex == index
    //                         ? '#069A8E'
    //                         : '#069A8E',
    //                     ...styles.categoryBtn
    //                 }}>
    //                     <View style={styles.categoryBtnImgCon}>
    //                         <Image source={category.image} style={{ height: 85, width: 85, resizeMode: 'cover', borderRadius: 60, backgroundColor: 'white' }} />
    //                     </View>
    //                     <Text style={{ padding: 15, color: 'white', backgroundColor: '#white' }}>{category.name}</Text>
    //                 </View>
    //             </TouchableOpacity>
    //         ))}
    //     </ScrollView>

    // }

    //Bottomsheet

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
                            ? 'white'
                            : 'white',
                        ...styles.categoryBtn
                    }}>
                        <View style={styles.categoryBtnImgCon}>
                            <Image source={category.image} style={{ height: 85, width: 85, resizeMode: 'cover', borderRadius: 60, backgroundColor: 'white' }} />
                        </View>
                        <Text style={{ padding: 15, color: '#white', backgroundColor: '#white' }}>{category.name}</Text>
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
    //   const { navigate } = this.props.navigation;

    const TopHotelCard = ({ navigation, hotel }) => {

        return (
            <View>
                <TouchableOpacity
                    style={styles.topHotelCard}
                    onPress={() => navigation.navigate("Details")}
                >
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
                </TouchableOpacity>
            </View>
        );
    };

    return (


        <SafeAreaView style={styles.container}>

            <View style={{ flex: 1 }}>
                {/* <Icon name="menu" size={15} color={"orange"} 
                // onPress={() => navigation.openDrawer()} 
                /> */}

                <ScrollView>
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
                            {/* <Text style={styles.headingText}>Guests</Text> */}
                            <TouchableOpacity
                                // onPress={() => navigation.navigate('Guests')}

                                style={{
                                    // backgroundColor: 'yellow',
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 1,
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    // backgroundColor: 'red',
                                    paddingTop: 10,
                                    paddingBottom: -5,
                                    width: '90%'
                                }}>
                                <Text style={styles.headingText}>Guests</Text>
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

                        <View style={{ marginRight: 20, borderRadius: 15 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 10, color: 'white', paddingBottom: 10 }}>Popular Cities</Text>
                            <ListCategories style={{ paddingBottom: 10 }} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 10, color: 'white' }}>Top Hotels</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <ScrollView
                                    horizontal={true}
                                    paddingBottom={25}
                                >
                                    <TouchableOpacity
                                        style={styles.topHotelCard}
                                        onPress={() => navigation.navigate('Details')}>
                                        
                                        <View>
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
                                            <Image
                                                style={styles.topHotelCardImage}
                                                source={{ uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/21756611.jpg?k=5543a7f729b0c4a2ffd26dc775a7614d2e8ba5fccb2cc18ac5ad0024a652bdd1&o=' }}
                                            />
                                            <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                                                    {/* {hotel.name} */}
                                                    Vythiri Holiday Resorts
                                                </Text>
                                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: "grey" }}>
                                                    {/* {hotel.location} */}
                                                    Vythiri, Kerala
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.topHotelCard}
                                        onPress={() => navigation.navigate('Details')}>
                                        
                                        <View>
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
                                            <Image
                                                style={styles.topHotelCardImage}
                                                source={{ uri: 'https://octavehotels.com/images/carousels/bangalore/church-inn/church-inn-3.jpg' }}
                                            />
                                            <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                                                    {/* {hotel.name} */}
                                                    Octave Adya Hotel                                                </Text>
                                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: "grey" }}>
                                                    {/* {hotel.location} */}
                                                    Kadugodi, 560067 Bangalore, India                                                 </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.topHotelCard}
                                        onPress={() => navigation.navigate('Details')}>
                                        <View>
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
                                            <Image
                                                style={styles.topHotelCardImage}
                                                source={{ uri: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg' }}
                                            />
                                            <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                                                    {/* {hotel.name} */}
                                                    Taj Banjara
                                                </Text>
                                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: "grey" }}>
                                                    {/* {hotel.location} */}
                                                    Hyderabad, India</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>

                        </View>

                    </View>
                </ScrollView> 
                <View>
                    {/* <Text>footer</Text> */}
                    <View >

                        <BottomSheet ref={ref => panelRef.current = ref}
                            sliderMinHeight={320}
                            sliderMaxHeight={900}
                        >
                            <ScrollView>
                                <View style={{ backgroundColor: 'white' }}>
                                    <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
                                    </TouchableOpacity>
                                </View>
                                <View backgroundColor={'white'}>
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
                                            paddingLeft: 5,
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
                    </View>
                </View>
            </View>


        </SafeAreaView>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#009387',
        //     justifyContent: 'center', 
        // alignItems: 'center' 
    },
    input: {
        marginTop: 15,
        paddingLeft: 25,
        paddingTop: 20,
        // backgroundColor: '#009387',
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30
    },
    inputTextBox: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: '90%',
    },
    inputBox: {
        // backgroundColor: 'yellow',
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
        backgroundColor: 'white',
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
});