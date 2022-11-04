import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);


    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Adults</Text>
                    <Text style={{ color: 'grey' }}>Ages 13 or above</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable
                        onPress={() => setAdults(adults - 1)
                        }
                        style={styles.button}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>-</Text>
                    </Pressable>
                    <Text style={{ color: 'black', marginHorizontal: 20, fontSize: 20 }}>{adults}</Text>

                    <Pressable
                        onPress={() => setAdults(adults + 1)
                        }
                        style={styles.button}

                    >
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Children</Text>
                    <Text style={{ color: 'grey' }}>Ages 2 to 12</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable
                        onPress={() => setChildren(children - 1)
                        }
                        style={styles.button}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>-</Text>
                    </Pressable>
                    <Text style={{ color: 'black', marginHorizontal: 20, fontSize: 20 }}>{adults}</Text>

                    <Pressable
                        onPress={() => setChildren(children + 1)
                        }
                        style={styles.button}

                    >
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Infants</Text>
                    <Text style={{ color: 'grey' }}>Under 2</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable
                        onPress={() => setInfants(infants - 1)
                        }
                        style={styles.button}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>-</Text>
                    </Pressable>
                    <Text style={{ color: 'black', marginHorizontal: 20, fontSize: 20 }}>{adults}</Text>

                    <Pressable
                        onPress={() => setInfants(infants + 1)
                        }
                        style={styles.button}

                    >
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View marginTop={15} borderRadius={8}>

                <TouchableOpacity>
                    <View style={styles.continue}>
                        <Text style={{
                            fontSize: 18,
                            color: 'white',
                        }}>Search</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>




    )
}

export default GuestsScreen;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'lightgrey',
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    continue: { 
        backgroundColor: '#069A8E',
        borderRadius: 8, 
        marginHorizontal: 40,
        marginTop: 310,
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '80%', 
        height: 50,
    },
})

