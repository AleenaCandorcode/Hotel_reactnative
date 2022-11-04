import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';


export default function SupportScreen({navigation}) {

    return (
        <View>
            <ImageBackground style={styles.headerImage}
                source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgIBwcHBwoIBwcHBw0HBwcHBw8ICQcNFREWFhURExMYHSggGCYlGx8TITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDysZFRkrLTcrLTc3Ny0rKy0tKy0rKysrKy0tNysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIASwAqAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBQQH/8QAGBABAQEBAQAAAAAAAAAAAAAAABEBEgL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQES/9oADAMBAAIRAxEAPwD8SAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFRQEFAQUBBQEFAQUBBQEFAQUBBQRBQAUBBQEFAQUBBQEFAQUBBQEFAQUBBUBoUBBUAAAAAAAAAAAAAAAAAABoWCwQUIMihBBQggoQQUIIKEEFCCAEABYABB0hG4kajLEI1CEVlI1CLBmChCsiiQQAgALBACAAQBUIABB9fKcu3Kb5bjFcYkdd8pvkhXKJHXfLO4Ra5wjcSEKxEjpEhCsQjUIQYI1CLFZhGoQhWYRqEWJWYRqEOSswagcq9LfLO+XbfLO41HKuO+Wdx33Gdwi1x3Gdx23Gdwg5bibjpuJuEHOJG9xIRaxEjcIQrEI1CLFrMSNkIViEbhFgxCNxIQZg1AiPW3Gdx13Gdwc3LcZ3HTcZ0Vz3Gdx01ncBz1nW9xNFY3E3Gk0GINRBWYRqEUZhGoQGYRqEUZhGoRRiDcAerrOtazrDDGs61rOis6zrWs6DGprWs6Kyi6iUQiotVIKpRlVIUSEaixajEI3CLRiDcFo+/WdXdZ1xqJrGtazpVZ1NXWdKqazrWs6UTUVCiCoUBQoKLFokWLFhUSEaixaMRWoLR9Gs6qa41MZ1NaSJWmNRuJCqwkbiQoxEjcSFGIRuEKMRY1Fi0ZixqLCjMWNZixajMWNRYUZg3BajW4kbiRzRmJG4RGnOEdOSJRyiR15OSq5RI7cpyVXKHLryclRy5WOnK8rRz5I6cryUc41y3yvK1GM8rG+V5KMQdOQqMwjcIayzCNxYzrTnCOkXllXLk5deTlKrlycuvJyUceV5deTko5cnLtycrRy5OXXleSo5cry6crytHPk5dOV5KOeeR15Co5RYsXMdNc6zFjWYsY1qsxeWosZ1axyvLpCMa058ry6RYlHLk5deV5KrlycuvJyUcuTl15OVqOfJy6cnK0c4vLpyQo58q6RCo+bFzExcenXHNXMazExrGNXNMxcwxrHPWs1I1mGNYxrSRYsXMYaZi8tRYlGeTluLCjnycukItHPk5dIQo58nLpCLRz5VuIlHnY1jGN492vNjWNYzi4xrTeLjONY561jWLiY1jnrWLjWJi4xqq0mNYyqRYqxFSEaAZhGlhRiEbhCjEG4KPGxrGMax9HXlxvGsYxvHPWmsaxnGsc9XFxrGcaxz1vGsaxnGsY1WsaxnGsZaaxUxcZVVAAUBCKCkR03zmbBUf/2Q==' }}
            >
                <View style={{ flexDirection: 'row'}}>
                    <View>
                        <TouchableOpacity>
                            <Icon
                                style={styles.icon}
                                name="arrow-back-ios"
                                color={"white"}
                              onPress={navigation.goBack}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 70 }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>9322 800 100</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.text}>Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.imageText}>Hi!</Text>
                    <Text style={styles.imageText}>How can we help?</Text>
                </View>
            </ImageBackground>
            <View style={{ marginTop: 40, paddingBottom: 20 }}>
                <TouchableOpacity >

                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 15, paddingTop: 15, paddingBottom: 15, alignContent: 'center', marginLeft: 20, marginRight: 20, borderRadius: 40, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                        <Text style={{ paddingLeft: 15, fontSize: 16 }}>I need help with an existing booking</Text>
                        <Feather
                            name="arrow-right"
                            size={25}
                            color={"black"}
                        />
                    </View>
                </TouchableOpacity>


            </View>
            <View>
                <TouchableOpacity>
                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 15, paddingTop: 15, paddingBottom: 15, alignContent: 'center', marginLeft: 20, marginRight: 20, borderRadius: 40, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20 }}>
                        <Text style={{ paddingLeft: 15, fontSize: 16 }}>I have some general questions</Text>
                        <Feather
                            name="arrow-right"
                            size={25}
                            color={"black"}
                        />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerImage: {
        height: 280,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        padding: 28
    },
    icon: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        padding: 20
    },
    imageText: {
        paddingTop: 30,
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: 20
    }
});