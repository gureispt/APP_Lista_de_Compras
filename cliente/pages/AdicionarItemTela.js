import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../services/api';

const AdicionarItemScreen = () => {

  const [ultimoId, setUltimo] = useState(0);
  const [descricao, setDesc] = useState("");
  const [comprado, setComp] = useState(false);

  useEffect( () => {
  
    const listarCompras = async () => {
      const response = await api.get().catch(console.log);
      response.data.sort((a, b) => b.id - a.id);
      setUltimo(response.data[0].id);
    }
  
    listarCompras();
  }, []);

  function adicionar(compra) {
    try{
      api.post("",compra);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carrinho</Text>
      {/*aqui a lógica para adicionar itens à lista */}
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
      marginTop: 10
    },
  });
export default AdicionarItemScreen;