import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/sacola.jpg')} 
        style={{ 
          height: 200, 
          width: 200, 
          margin: 10,
          marginTop: 50,
          borderRadius: 200,
          }}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1564BF',
    },
    text: {
      marginBottom: 70,
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Times New Roman',
    },
  });
export default HomeScreen;
