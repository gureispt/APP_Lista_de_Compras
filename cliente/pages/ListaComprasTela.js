import { View, Text, StyleSheet } from 'react-native';
import api from '../services/api';
import React, { useState,  useEffect  } from 'react'

const ListaComprasScreen = () => {

  const [compras, setCompras] = useState([]);

useEffect( () => {
  
  const listarCompras = async () => {
    const response = await api.get();
    setCompras(response.data);
  }

  listarCompras();
}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Compras</Text>
      {compras.map(compra => (
        <View style = {styles.itemContainer} key={compra.id}>Código: {compra.id}
        <Text style={styles.itemId}> </Text>
        <Text style={styles.itemDesc}>Descrição: {compra.descricao}</Text></View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
      backgroundColor: '#add8e6',
      
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    },
    itemContainer:{
      flexDirection: "row",
      alignItems: "start",
      justifyContent: "flex-start",
      padding: 7,
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: "Arial"
    },
    itemId: {
      marginRight: 10,
    },
    itemDesc: {
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: "Arial",
    }
  });
export default ListaComprasScreen;
