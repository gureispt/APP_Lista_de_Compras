import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            
        </Text>
      {/* aqui a lógica do login */}
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
});

export default Login;
