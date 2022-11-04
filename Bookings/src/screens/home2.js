import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList,
  Image,
  Button
} from 'react-native';
import hotels from '../consts/hotel';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';


const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;
// const [mydate, setDate] = useState(new Date());
// const [displaymode, setMode] = useState('date');


const HomeScreen = ({navigtion}) => {
  const categories = ['All', 'Popular', 'Top Rated', 'Featured','Luxuary'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const CategoryList = ({navigation}) => {
    return (
      <View style={styles.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? "red"
                      : "black",
                }}>
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                 
                    backgroundColor: "pink",
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({navigation, hotel, index}) => {
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        // onPress={() => navigtion.navigate('Details', hotel)}
        // onPress={() => navigation.navigate('Details')}
        >
        <Animated.View style={{...styles.card, transform: [{scale}]}}>
          <Animated.View style={{...styles.cardOverLay, opacity}} />
          <View style={styles.priceTag}>
            <Text
              style={{color: "white", fontSize: 20, fontWeight: 'bold'}}>
              ${hotel.price}
            </Text>
          </View>
          <Image source={hotel.image} style={styles.cardImage} />
          <View style={styles.cardDetails}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {hotel.name}
                </Text>
                <Text style={{color: "grey", fontSize: 12}}>
                  {hotel.location}
                </Text>
              </View>
              <Feather name="bookmark" size={22} color={"black"} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Feather name="star" size={15} color={'orange'} />
                <Feather name="star" size={15} color={'orange'} />
                <Feather name="star" size={15} color={'orange'} />
                <Feather name="star" size={15} color={'orange'} />
                <Feather name="star" size={15} color={'orange'} />
              </View>
              <Text style={{fontSize: 10, color: "grey"}}>365reviews</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  const TopHotelCard = ({hotel}) => {
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
          <Text style={{color: "white", fontWeight: 'bold', fontSize: 15}}>
            5.0
          </Text>
        </View>
        <Image style={styles.topHotelCardImage} source={hotel.image} />
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>{hotel.name}</Text>
          <Text style={{fontSize: 7, fontWeight: 'bold', color: "grey"}}>
            {hotel.location}
          </Text>
        </View>
      </View>
    );
  };

  return <SafeAreaView style={{flex:1, backgroundColor:"white" }}>
    <View style={styles.header}>
        <View  style={{paddingBottom: 15, }}>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{paddingBottom: 15 , fontWeight: 'bold',fontSize:30, color: 'black'}}>Find </Text>
              <Feather name="user" size={32} color="black" />
          </View>

            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>Your Stay</Text>
            </View>
        </View>

    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchInputContainer} >
            <Feather name="map-pin" size={20} color="black" style={{marginLeft: 20}}/>
            <TextInput placeholder='City/Landmark/Property Name' style={{marginLeft: 20}}/>
            <View marginTop={15} width={80} marginLeft={120}>
              <Button title="Search"/>
            </View>
        </View>
        <View style={{ flexDirection: 'row' ,justifyContent:'space-between'}}>
          {/* <View style={styles.checkinInputContainer}> */}
          {/* <DateTimePicker
            value={mydate}
            mode={displaymode}
            is24Hour={true}
            display="default"
            onChange={changeSelectedDate}
          /> */}
          {/* </View> */}
          {/* <View style={styles.checkouInputContainer}marginRight={20}>
            <TextInput placeholder='checkout' style={{marginRight: 20}}/>
          </View> */}
        </View>
        {/* <View marginTop={15} width={80} marginLeft={120}>
            <Button title="Search"/>
        </View> */}
        {/* <Button title='Search' style={styles.searchButton}>
        </Button> */}
        <CategoryList/>
        <View>
          <Animated.FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            horizontal
            data={hotels}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <Card hotel={item} index={index} />}
            snapToInterval={cardWidth}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: "grey"}}>
            Top hotels
          </Text>
          <Text style={{color: "grey"}}>Show all</Text>
        </View>
        <FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item}) => <TopHotelCard hotel={item} />}
        />
    </ScrollView>
  </SafeAreaView>;
}

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 22,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: "#E8E8E8",
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row'
  },
  checkinInputContainer: {
    height: 90,
    width: 170,
    backgroundColor: "#E8E8E8",
    marginTop: 15,
    marginLeft: 20,
    // marginRight: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkouInputContainer: {
    height: 90,
    width: 170,
    backgroundColor: "#E8E8E8",
    marginTop: 15,
    // marginLeft: 10,
    marginRight: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    width:20 
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "white",
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: "black",
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: "white",
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardOverLay: {
    height: 280,
    backgroundColor: "white",
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  topHotelCard: {
    height: 120,
    width: 120,
    backgroundColor: "white",
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

});

