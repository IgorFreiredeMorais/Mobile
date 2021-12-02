import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Modal, FlatList } from 'react-native';
import { Feather} from '@expo/vector-icons';

export default () => {
  const [Visible, setVisible] = useState(false);
  const [fields, setFields] = useState([
    {image:'https://static.hbt.triider.com.br/photos/quotation/gallery/maracanazinho-01-507766_507766.jpg', id:1},
    {image:'https://www.jornalfolharegional.com.br/wp-content/uploads/WhatsApp-Image-2019-07-25-at-14.11.51.jpeg', id:2},
    {image:'https://www.totalconstrucao.com.br/wp-content/uploads/2019/01/Pintura-de-quadra-poliesportiva-3.jpg', id:3},
    {image:'https://www.politintas.com.br/wp-content/uploads/2014/01/foto_10.jpg', id:4},
    {image:'https://conteudo.imguol.com.br/2012/10/31/bagkok-futsal-arena-ginasio-que-sera-sede-da-final-da-copa-do-mundo-de-futsal-2012-1351697065107_615x300.jpg.webp', id:5},
    
  ]);
  return (
    <>
    <View>
      <View style={{marginTop:5}}>
        <Button title='Quadra' onPress={() => {setVisible(true)}} color='#1C1C1C'/>
      </View>
      <Modal visible={Visible} animationType={'slide'} style={styles.botao}>
        <View style={{paddingBottom:70}}>
        <Feather
        style={{ alignSelf: 'center', paddingTop:10 }}
        name="x"
        size={30}
        color="black"
        onPress={() => {setVisible(false)}}
        />
          {fields.length > 0 &&
            <Text style={styles.numero}>Temos {fields.length} quadras cadastradas no momento</Text>
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