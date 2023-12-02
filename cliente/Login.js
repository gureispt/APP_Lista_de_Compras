import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import api from './services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const validar = async () => {
    try {
      await api.post('/login', {username, senha}).then(async (res) => {
        await AsyncStorage.setItem('logado', 'logado');
        Keyboard.dismiss();
        return <App/>;
    })

    } catch (err) {
      setError('Login ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
            setError("");
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            setError("");
          }}
        />

        <Text style={{textAlign: 'center', color: 'red'}}> {error} </Text>
        <Button title="Entrar" onPress={validar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '80%',
    gap: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5
  },
});

export default App;
