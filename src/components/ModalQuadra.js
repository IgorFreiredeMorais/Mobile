import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Modal } from 'react-native';
import { Feather} from '@expo/vector-icons';

export default () => {
  const [Visible, setVisible] = useState(false);
  return (
    <>
    <View>
      <View style={{marginTop:5}}>
        <Button title='Quadra' onPress={() => {setVisible(true)}} color='#1C1C1C'/>
      </View>
      <Modal visible={Visible} animationType={'slide'} style={styles.botao}>
        <View>
        <Feather
        style={{ alignSelf: 'center', paddingTop:5 }}
        name="x"
        size={30}
        color="black"
        onPress={() => {setVisible(false)}}
        />
          <Image
          source={require('../../assets/quadra.jpg')}
          style={{ alignSelf: 'center', marginTop:60, justifyContent:'center' }}
          />
          <Text style={{ alignSelf: 'center', paddingTop:20, fontSize:20 }}>
            Aberto de 08h-19h
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

const styles = StyleSheet.create({
  botao: {
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