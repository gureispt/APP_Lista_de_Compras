import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import App from "../Login";

const SobreScreen = () => {
  
  const logout = async () => {
    await AsyncStorage.removeItem('logado').then(()=>{
      return <App/>;
    })
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => logout()} style={styles.logoutButton}>
      <Text style={{color: '#fff'}}>Logout</Text>
    </TouchableOpacity>
        <Text style={styles.text}>
            Esse projeto foi densenvolvido por Gustavo Fernandes Reis e Caio Rodrigo de Oliveira para 
            avaliação de P2 em Dispositivos Móveis.
        </Text>
      <Image source={{uri: 'https://media.licdn.com/dms/image/D4D12AQG1-1xLPzoLsw/article-cover_image-shrink_600_2000/0/1653971382299?e=2147483647&v=beta&t=sAo-4ZNUKeumSJT2alOBWHjxxYaIzckVDLNoQtKUPY8'}}  
        style={{marginTop: 150, width: 200, height:250, borderRadius: 30}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    margin: 10,
    textAlign: "center",
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginRight: 20
  },
});

export default SobreScreen;
