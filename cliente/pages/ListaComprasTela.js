import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import api from "../services/api";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

const ListaComprasScreen = () => {
  const [compras, setCompras] = useState([]);

  const listarCompras = async () => {
    const response = await api.get();
    setCompras(response.data);
  };

  useFocusEffect(
    React.useCallback(() => {
      listarCompras();
    }, [])
  );

  const comprar = async (compra) => {
    compra.comprado = true;
    await api.put("/" + compra.id, compra).then((res) => listarCompras());
  };

  const Card = (compra) => {
    return (
      <View style={styles.card.body} key={compra.id}>
        <Text style={styles.card.title}>{compra.descricao}</Text>
        <TouchableOpacity
          style={styles.comprado}
          onPress={() => comprar(compra)}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Comprar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Compras</Text>
      <ScrollView style={{width: '100%'}}>
        {compras.map((compra) => (compra.comprado ? null : Card(compra)))}
      </ScrollView>
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
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "flex-start",
    padding: 7,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  itemId: {
    marginRight: 10,
  },
  itemDesc: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  comprado: {
    backgroundColor: "#783ac9",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
  },
  card: {
    body: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      borderRadius: 8,
      padding: 10,
      margin: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 3,
      width: "90%",
      alignSelf: 'center',
    },
    title: {
      fontWeight: "bold",
      marginBottom: 8,
    },
    content: {},
  },
});
export default ListaComprasScreen;
