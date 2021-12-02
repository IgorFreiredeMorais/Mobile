import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default ()=> {
  return (
    <SafeAreaView>
      <View style={styles.header}>
      <FontAwesome
        style={{ alignSelf: 'center' }}
        name="navicon"
        size={28}
        color="white"
      />
        <FontAwesome
        style={{ alignSelf: 'center', paddingTop:5}}
        name="futbol-o"
        size={28}
        color="white"
      />
        <FontAwesome
        style={{ alignSelf: 'center' }}
        name="search"
        size={28}
        color="white"
      />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#101010',
    flexDirection:'row',
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor:'#FFF',
    borderBottomWidth:10
  },
});
