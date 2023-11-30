import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SobreScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Esse projeto foi densenvolvido por Gustavo Fernandes Reis e Caio Rodrigo  
        </Text>
      {/* Adicione aqui a lógica para exibir a lista de compras */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    margin: 10,
    alignItems: 'center',

  },
});

export default SobreScreen;
