import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Switch,
} from "react-native";

import api from "../services/api";

import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

const Editar = () => {
  const route = useRoute();

  const [descricao, setDesc] = useState("");
  const [id, setId] = useState(0);
  const [comprado, setComp] = useState(false);

  let passedCompra = {};
  useFocusEffect(
    React.useCallback(() => {
    passedCompra = route.params;
      setDesc(passedCompra.descricao);
      setId(passedCompra.id);
      setComp(passedCompra.comprado);

      return () => {
        passedCompra = {};
      };
    }, [])
  );

  const editar = (compra) => {
    try {
      api.put("/" + compra.id, compra).then(() => {
        navigation.navigate('Carrinho');
      });
    } catch (err) {
      console.error(err);
    }
    console.log(compra);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 100,
          marginBottom: 50,
          alignSelf: "center",
        }}
      >
        {" "}
        Editar Compra{" "}
      </Text>
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
        <Switch value={comprado} onChange={(value) => setComp(value.nativeEvent.value)} />
        <Button
          title="Editar"
          onPress={() => {
            editar({ id, descricao, comprado });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
  },
});

export default Editar;
