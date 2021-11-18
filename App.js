import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Modal } from 'react-native';
import Header from "./src/components/Header";
import ModalQuadra from "./src/components/ModalQuadra";
import ModalCampo from "./src/components/ModalCampo";


export default function App() {
  return (
    <>
    <StatusBar translucent={false} />
    <Header/>
    <ModalQuadra/>
    <ModalCampo/>
    </>
  );
}