import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Modal} from 'react-native';
import Header from "../components/Header";


export default function App() {
  return (
    <>
    <StatusBar  backgroundColor='#DCDCDC' translucent={false} />
    <Header/>
    <View style={styles.container}>
        <Text style={styles.texto}>
            Este é um aplicativo que mostra todos campos e quadras que existem na cidade de Campo Belo
        </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto:{
        fontWeight: 'bold',
        fontSize: 18,
        width: 350,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});