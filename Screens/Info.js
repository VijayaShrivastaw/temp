import React, { useRef, useState } from "react";
import {
    View, Text, FlatList, StyleSheet, StatusBar, ScrollView, Image,
    Button,
    TouchableOpacity,
    DrawerLayoutAndroid
} from 'react-native'
const DATA = [
    {
        id: '1',
        title: 'Louis Partrick',
        post: 'Manager',
        shor: 'LP',
        image: require('../assets/star.png'),
        image2: require('../assets/stars.png')
    },
    {
        id: '2',
        title: 'Martin Gibbs',
        post: 'Designer',
        shor: 'LP',
        image: require('../assets/star.png'),
        image2: require('../assets/stars.png')


    },
    {
        id: '3',
        title: 'Avan Berry',
        shor: 'MG',
        post: 'Account manager',
        image: require('../assets/star.png'),
        image2: require('../assets/stars.png')


    },
    {
        id: '4',
        title: 'Sadie Bates',
        shor: 'SB',
        post: 'Designer',
        image: require('../assets/star.png'),
        image2: require('../assets/stars.png')


    },
    {
        id: '5',
        title: 'Francisco',
        shor: 'F',
        post: 'Developer',
        image: require('../assets/star.png'),
        image2: require('../assets/stars.png')


    },

];




const Info = () => {
    const [image1, setImage] = useState(false);
    const handle = (id) => {
        setImage(
            current => !current
            )
        console.log(id, 'vijay')
    
    }
    const Item = ({ title, post, shor, image, image2, id }) => (

        <View style={styles.item}>
            <View style={{ width: '25%', height: 60 }}>
                <View style={{
                    backgroundColor: '#7CFF58', borderRadius: 50, height: 65,
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: "#000"
                    }}>
                        {shor}
                    </Text>
                </View>
                <View style={{ width: '20%' }}>

                </View>
            </View>
            <View style={{ width: '65%', }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title1}>{post}</Text>
            </View>
            {
                image1 ?
                    <TouchableOpacity style={{ width: '10%' }}
                        onPress={() => handle(id)}
                    >
                        <Image source={image}
                            style={{ height: 40, width: 40 }} />

                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{ width: '10%' }}
                        onPress={() => handle(id)}
                    >
                        <Image source={image2}
                            style={{ height: 40, width: 40 }} />

                    </TouchableOpacity>

            }

        </View>
    );
    const renderItem = ({ item }) => (
        <Item
            id={item.id}
            title={item.title}
            post={item.post}
            shor={item.shor}
            image={item.image}
            image2={item.image2}

        />
    );
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');


    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>

        </View>
    );
    return (
        <DrawerLayoutAndroid
            ref={drawer}
            // drawerWidth={300}
            // drawerPosition={drawerPosition}
            renderNavigationView={navigationView}>
            <View style={{ flex: 1 }}>
                <StatusBar

                    backgroundColor="#7CFF58"

                />
                <View style={styles.header}>
                    <View style={{ width: '30%' }}>
                        <TouchableOpacity
                            onPress={() => drawer.current.openDrawer()}
                        >
                            <Image source={require('../assets/drawer.png')} style=
                                {{ height: 30, width: 30, }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 30, fontWeight: '600' }}>
                            Index
                        </Text>
                    </View>

                    <View style={{ width: '10%' }}>
                        <Image source={require('../assets/dots.png')}
                            style=
                            {{ height: 30, width: 30 }} />
                    </View>
                </View>
                <FlatList
                    data={DATA}
                    // renderItem={({ item }) => <Item title={item.title} />}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </DrawerLayoutAndroid>
    )
}
const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        // borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5,
        shadowOpacity: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600'
    },
    title1: {
        fontSize: 18,
        // color:'#000',
        fontWeight: '600'
    },
    header: {
        backgroundColor: '#7CFF58',
        padding: 30,
        flexDirection: "row",
        // justifyContent:"space-between",
        alignItems: 'center'
    },
    container: {
        flex: 1
    },

    paragraph: {
        padding: 16,
        fontSize: 25,
        textAlign: 'center',
    },
});


export default Info