import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import api from "../services/api";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const AdicionarItemScreen = () => {
  const [ultimoId, setUltimo] = useState(0);
  const [descricao, setDesc] = useState("");
  const [comprado, setComp] = useState(false);
  const [compras, setCompras] = useState([]);

  const listarCompras = async () => {
    const response = await api.get();
    response.data.sort((a, b) => a.comprado - b.comprado);
    setUltimo(response.data[0]?.id);
    setCompras(response.data);
  };

  useFocusEffect(
    React.useCallback(() => {
      listarCompras();
    }, [])
  );

  const adicionar = (compra) => {
    try {
      api.post("", compra).then(() => {
        listarCompras();
        setDesc("");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const apagar = (compra) => {
    try {
      api.delete("/" + compra.id).then(() => listarCompras());
    } catch (err) {
      console.error(err);
    }
  };

  const navigation = useNavigation();

  const editar = (compra) => {
    navigation.navigate("Editar", compra);
  };

  const renderCompra = (compra) => {
    let textdec = "",
      bg = "";

    if (compra.comprado) textdec = "line-through";
    else textdec = "none";
    if (compras.indexOf(compra) % 2 == 0) bg = "#f0f0f0";
    else bg = "#fff";
    return (
      <View
        key={compra.descricao + compra.id}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          alignSelf: "center",
          marginBottom: 10,
          backgroundColor: bg,
        }}
      >
        <Text style={{ textDecorationLine: textdec, fontSize: 18, flex: 4 }}>
          {compra.descricao}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <TouchableOpacity style={styles.actionEdit}>
            <Ionicons
              name="pencil"
              size={25}
              color={"#fff"}
              onPress={() => editar(compra)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionDelete}
            onPress={() => apagar(compra)}
          >
            <Ionicons name="trash" size={25} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
      </View>

      <View style={{ marginTop: 10, width: "100%" }}>
        <ScrollView
          style={{
            padding: 20,
            backgroundColor: "#fff",
            width: "80%",
            alignSelf: "center",
            height: "80%",
            borderRadius: 10,
          }}
        >
          {compras.map((compra) => renderCompra(compra))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
  },
  actionDelete: {
    backgroundColor: "red",
    borderRadius: 3,
  },
  actionEdit: {
    backgroundColor: "gray",
    borderRadius: 3,
  },
});
export default AdicionarItemScreen;
