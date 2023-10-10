import React, { useState, useEffect, useRef } from "react";
import {
    View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, StatusBar,
    DrawerLayoutAndroid,
    Image,
    Alert,
    Button
} from 'react-native'
import Info from "./Info";
import { Formik } from 'formik';
import { Drawer } from 'react-native-drawer-layout';

import * as Yup from 'yup';
const Home = ({ navigation }) => {
  
    const SignupSchema = Yup.object().shape({
        text: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First Name is required'),
        number: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Last Name is required'),
        job: Yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Job is required'),
        salary: Yup.string()
            .required('Salary is required'),

    });


    return (
        
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 50 }}>
            <Formik
                initialValues={{
                    text: '',
                    number: '',
                    job: '',
                    salary: ''

                }}
                validationSchema={SignupSchema}
                onSubmit={values => navigation.navigate('Info')}

            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    setFieldTouched,
                    isValid,
                    handleSubmit,
                }) => (


                    <><StatusBar
                        backgroundColor="#fff" />
                        <Text style={styles.text}>
                            Enter employee details
                        </Text><View style={styles.textMesg}>
                            <Text>
                                First Name
                            </Text>
                        </View><View>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('text')}
                                value={values.text}
                                onBlur={() => setFieldTouched('text')}
                            />
                            {touched.text && errors.text && (
                                <Text style={styles.error}>
                                    {errors.text}
                                </Text>
                            )}

                        </View>
                        <View style={styles.textMesg}>
                            <Text>
                                Last Name
                            </Text>
                        </View><View>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('number')}
                                value={values.number}
                                onBlur={() => setFieldTouched('number')}
                            />
                            {touched.number && errors.number && (
                                <Text style={styles.error}>
                                    {errors.number}
                                </Text>
                            )}

                        </View><View style={styles.textMesg}>
                            <Text>
                                Job Title
                            </Text>
                        </View><View>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('job')}
                                value={values.job}
                                onBlur={() => setFieldTouched('job')}
                            />
                            {touched.job && errors.job && (
                                <Text style={styles.error}>
                                    {errors.job}
                                </Text>
                            )}
                        </View><View style={styles.textMesg}>
                            <Text>
                                Salary
                            </Text>
                        </View><View>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                onChangeText={handleChange('salary')}
                                onBlur={() => setFieldTouched('salary')}
                                value={values.salary} />
                            {touched.salary && errors.salary && (
                                <Text style={styles.error}>
                                    {errors.salary}
                                </Text>
                            )}

                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => handleSubmit()}
                            disabled={false}

                        >
                            <Text style={styles.buttonText}>
                                Save
                            </Text>
                        </TouchableOpacity></>
                )}
            </Formik>
            


        </ScrollView>              

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: '#7CFF58',
        textAlign: 'center',
        fontWeight: '600'
    },
    button: {
        backgroundColor: "#7CFF58",
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 60
    },
    buttonText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '600'
    },
    input: {
        // height: 40,
        // margin: 12,
        borderBottomWidth: 3,
        borderBottomColor: '#7CFF58'
        // padding: 10,
    },
    textMesg: {
        marginTop: 25,
        fontSize: 20,
        color: '#808080'
    },
    error: {
        color: 'red'
    },
  
   
}
)

export default Home