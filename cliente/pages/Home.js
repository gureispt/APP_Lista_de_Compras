import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/sacola.jpg')} 
        style={{ 
          height: 200, 
          width: 200, 
          margin: 10,
          marginTop: 230,
          borderRadius: 200,
          }}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
      backgroundColor: '#1564C0',
    },
    text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Times New Roman',
    },
  });
export default HomeScreen;
