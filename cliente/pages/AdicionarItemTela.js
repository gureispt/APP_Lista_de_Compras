import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdicionarItemScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carrinho</Text>
      {/* Adicione aqui a lógica para adicionar itens à lista */}
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
export default AdicionarItemScreen;