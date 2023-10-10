import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput,StatusBar } from 'react-native'
import Info from "./Info";

const AddEmployee = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
    const [job, onChangeJob] = useState('');
    const [salary, onChangeSalary] = useState('');

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#7CFF58",
            justifyContent: 'center',
            alignItems: "center"
        }}>
            <StatusBar

                backgroundColor="#7CFF58"

            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}

            >
                <Text style={{
                    fontSize: 30,
                    color: '#fff',
                    fontWeight: '800'
                }}>
                    ADD EMPLOYEE
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#77ab59',
        width: '90%',
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }
}
)

export default AddEmployee