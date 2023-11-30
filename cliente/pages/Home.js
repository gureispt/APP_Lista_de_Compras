import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Essa é a tela inicial</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        onChangeText={(text) => console.log(text)} // Aqui você pode manipular o texto digitado
      />

      <Button
        title="Clique Aqui"
        onPress={() => alert('Botão Clicado!')} // Aqui você pode adicionar a lógica do botão
      />

      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => console.log('TouchableOpacity pressionado!')} // Aqui você pode adicionar a lógica do TouchableOpacity
      >
        <Text>Pressione aqui</Text>
      </TouchableOpacity>

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
      fontFamily: 'Arial',
      marginTop: 50,
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 20,
      paddingHorizontal: 10,
    },
    touchableOpacity: {
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginTop: 20,
    },
  });
export default HomeScreen;
