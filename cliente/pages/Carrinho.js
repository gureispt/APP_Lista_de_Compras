import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  ScrollView,
} from "react-native";
import api from "../services/api";
import { Ionicons } from "@expo/vector-icons";

const AdicionarItemScreen = () => {
  const [ultimoId, setUltimo] = useState(0);
  const [descricao, setDesc] = useState("");
  const [comprado, setComp] = useState(false);
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const listarCompras = async () => {
      const response = await api.get();
      response.data.sort((a, b) => b.id - a.id);
      setUltimo(response.data[0]?.id);
      setCompras(response.data)
    };

    listarCompras();
  }, []);

  const adicionar = (compra) => {
    try {
      api.post("", compra);
    } catch (err) {
      console.log(err);
    }
  }

  const renderCompra = (compra) => {
    // if(compra.comprado){
    //   return (
    //     <View style></View>
    //   )
    // }
      return (<View>
        <Text style={{color:'#fff'}}> {compra.descricao}</Text>
        
        {/* <Ionicons name="delete" size={size} color={color} /> */}
      </View>)
    
  }

  return (
    <View style={styles.container}>
      <View style={{ width: "80%", alignSelf: "center" }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            margin: 10,
            padding: 5,
          }}
          placeholder="Digite um produto"
          onChangeText={(value) => setDesc(value)}
          value={descricao}
        />
        <Button
          title="Salvar"
          onPress={() => {
            adicionar({ id: ultimoId + 1, descricao, comprado });
            setUltimo(ultimoId + 1);
          }}
        />
        
        <View style={{ marginTop: 10 }}>
        <ScrollView style={{paddingHorizontal: 20}}>
          {compras.map((compra) => renderCompra(compra))}
        </ScrollView>

      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
export default AdicionarItemScreen;
