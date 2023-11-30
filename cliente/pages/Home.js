import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Seja Bem-Vindo!</Text>
      {/* Text, Text Input, Button, Pressable, Touchble Opacity, Switch, Slider, Picker, Flat List 
      alguns desses(conter) */}
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
      marginTop: 50
    },
  });
export default HomeScreen;
