import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Modal} from 'react-native';

import TabNavigator from './src/routes/BottomTab';


export default function App() {
  return (
    <>
    <StatusBar  backgroundColor='#DCDCDC' translucent={false} />
    <TabNavigator/>
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