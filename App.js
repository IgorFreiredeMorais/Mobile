import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Modal} from 'react-native';
import Header from "./src/components/Header";
import ModalQuadra from "./src/components/ModalQuadra";
import ModalCampo from "./src/components/ModalCampo";


export default function App() {
  return (
    <>
    <StatusBar  backgroundColor='#DCDCDC' translucent={false} />
    <Header/>
    <ModalQuadra/>
    <ModalCampo/>
    </>
  );
}

const styles = StyleSheet.create({
  imagem: {
    backgroundColor: '#fff',
    paddingBottom:20,
    borderRadius:15,
    height:300,
    alignItems: 'center',
    justifyContent: 'center',
  },

container:{
  paddingTop:15,
  paddingBottom:30,
},

imagem2:{
  height:80
}
});