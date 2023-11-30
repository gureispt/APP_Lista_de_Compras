import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            
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
    textAlign: "center",
  },
});

export default Login;
