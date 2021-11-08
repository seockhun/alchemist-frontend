import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/logo1.png")}></Image>
            <TextInput placeholder="id or email" style={styles.IdInput} />
            <TextInput placeholder="password" style={styles.PwInput} />
            <Text style={styles.GoSignup}>계정이 없으신가요?</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    IdInput: {
        marginTop: 50,
        width: 300,
        height: 40,
        borderWidth: 1,
        backgroundColor: "#DDDDDD",
        borderColor: "#F4F4F4",
        paddingLeft: 20,
        borderRadius: 5
    },
    PwInput: {
        marginTop: 15,
        width: 300,
        height: 40,
        borderWidth: 1,
        backgroundColor: "#DDDDDD",
        borderColor: "#F4F4F4",
        paddingLeft: 20,
        borderRadius: 5
    },
    GoSognup: {
        color: "#699CFF",
        borderWidth: 1
    }
});
