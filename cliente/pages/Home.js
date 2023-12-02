import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
         <Text style ={styles.text}>Bem vindo a sua lista de compras</Text>

        <Image source={{uri: 'https://i.pinimg.com/originals/e7/31/3c/e7313cf4e2648d7170a034bdfe99894e.gif'}}  
        style={{marginRight: 50, width: 350, height:275}}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    text: {
      marginBottom: 70,
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Times New Roman',
      textAlign: 'center',
      alignSelf: 'center'
    },
  });
export default Home;