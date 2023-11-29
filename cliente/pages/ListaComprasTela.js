import { View, Text, StyleSheet } from "react-native";
import api from "../services/api";
import React, { useState, useEffect } from "react";

const ListaComprasScreen = () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const listarCompras = async () => {
      try{
        const response = await api.get();
        setCompras(response.data);
      } catch (erro) {
        console.error('Erro:', erro);
      }
    };
    
    listarCompras();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Compras</Text>
      <Text> {JSON.stringify(compras)} </Text>
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
    fontWeight: "bold",
    marginTop: 10,
  },
});
export default ListaComprasScreen;
