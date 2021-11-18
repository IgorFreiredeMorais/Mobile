import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Modal } from 'react-native';
import { Feather} from '@expo/vector-icons';

export default () => {
  const [Visible, setVisible] = useState(false);
  return (
    <>
    <View>
      <View style={{marginTop:30}}>
        <Button title='Campo' onPress={() => {setVisible(true)}} color="#1C1C1C"/>
      </View>
      <Modal visible={Visible} animationType={'slide'}>
        <View>
        <Feather
        style={{ alignSelf: 'center', paddingTop:5 }}
        name="x"
        size={30}
        color="black"
        onPress={() => {setVisible(false)}}
        />
          <Image
          source={require('../../assets/campo.jpg')}
          style={{ alignSelf: 'center', marginTop:60}}
          />
          <Text style={{ alignSelf: 'center', paddingTop:20, fontSize:20 }}>
            Aberto de 18:00h-00:00h
          </Text>
          <Text style={{ alignSelf: 'center', paddingTop:20, fontSize:20 }}>
            Contato:99861-2106
          </Text>
        </View>
      </Modal>
    </View>
    </>
  );
}