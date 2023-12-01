import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const ValidarLogin = () => {
    console.log("Usuário:", username);
    console.log("Senha:", password);

    // validar as credenciais com o servidor
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faça login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry // Para esconder a senha digitada
      />
      <TouchableOpacity style={styles.button} onPress={ValidarLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#add8e6",
  },
  text: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    margin: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Login;