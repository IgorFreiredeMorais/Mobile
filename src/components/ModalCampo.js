import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Modal, FlatList } from 'react-native';
import { Feather} from '@expo/vector-icons';

export default () => {
  const [Visible, setVisible] = useState(false);
  const [fields, setFields] = useState([
    {image:'https://stampagramas.com.br/wp-content/uploads/2021/02/2021-02-12-tamanhos-oficiais-de-campo-society-802x506.jpg', id:1},
    {image:'https://diariodofla.com.br/wp-content/uploads/2021/06/Maracana-2.jpg', id:2},
    {image:'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/09/morumbi-11-768x567.jpg', id:3},
    {image:'https://distritodoesporte.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-11-at-11.47.23.jpeg', id:4},
    {image:'https://www.ceara.gov.br/wp-content/uploads/2021/07/cc369be4-45e1-4188-970d-775ff8e48060.jpg', id:5},
    
  ]);
  return (
    <>
    <View>
      <View style={{marginTop:30}}>
        <Button title='Campo' onPress={() => {setVisible(true)}} color="#1C1C1C"/>
      </View>
      <Modal visible={Visible} animationType={'slide'}>
        <View style={{paddingBottom:70}}>
        <Feather
        style={{ alignSelf: 'center', paddingTop:10 }}
        name="x"
        size={30}
        color="black"
        onPress={() => {setVisible(false)}}
        />

        {fields.length > 0 &&
          <Text style={styles.numero}>Temos {fields.length} campos cadastrados no momento</Text>
        }
        <FlatList
          data={fields}
          keyExtractor={(item) =>item.id}
          renderItem={({item})=>
          <View style={styles.imagem}>
            <Image style={styles.imagem2} source={{uri:item.image}}/>
          </View>
          }
        >
        </FlatList>
        </View>
      </Modal>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  imagem: {
    paddingBottom:40,
    borderRadius:15,
    marginBottom:40,
    backgroundColor:"#000000",
    display:'flex',
    alignItems: 'center',
  },
  numero:{
    alignSelf: 'center',
    marginBottom:15,
    fontSize:18,
    color:"#8B0000",
    marginTop:15
  },
  imagem2:{
    height:150,
    width:350,
    marginTop:50,
  },
});