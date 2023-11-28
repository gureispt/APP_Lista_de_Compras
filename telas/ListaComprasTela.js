import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListaComprasScreen = () => {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Lista de Compras</Text>
      {/* Adicione aqui a lógica para exibir a lista de compras */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
export default ListaComprasScreen;
