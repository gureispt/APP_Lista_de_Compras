import React, {useState, useEffect} from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import api from '../services/api';

const AdicionarItemScreen = () => {

  const [ultimoId, setUltimo] = useState(0);
  const [descricao, setDesc] = useState("");
  const [comprado, setComp] = useState(false);
  
  useEffect( () => {
  
    const listarCompras = async () => {
      const response = await api.get();
      response.data.sort((a, b) => b.id - a.id);
      setUltimo(response.data[0]?.id);
    }
  
    listarCompras();
  },[]);

  function adicionar(compra) {
    try{
      api.post("",compra);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, marginTop: 300,padding: 5 }}
        placeholder="Digite um produto"
        onChangeText={(value) => setDesc(value)}
        value={descricao}
      />
      <Button
        title="Enviar"
        onPress={() => {
          adicionar({id: ultimoId+1, descricao, comprado})
          setUltimo(ultimoId+1)
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
      backgroundColor: '#add8e6', 
    }
  });
export default AdicionarItemScreen;