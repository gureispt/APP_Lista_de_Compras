import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ListaComprasTela from './telas/ListaComprasTela';
import AdicionarItemTela from './telas/AdicionarItemTela';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      
      tabBarOptions={{ //estilização dos ícones
          activeTintColor: 'blue', // Cor do ícone ativo
          inactiveTintColor: 'gray', // Cor do ícone inativo
          labelStyle: {
            fontSize: 15,
          },
          style: {
            backgroundColor: 'white', // Cor de fundo da barra de abas
          },
        }}
      >

        
        <Tab.Screen name="Lista" component={ListaComprasTela} options={{
            tabBarIcon: ({ color, size }) => 
              (<Ionicons name="ios-list" size={size} color={color} />),}}/>

        <Tab.Screen name="Carrinho" component={AdicionarItemTela} options={{ 
            tabBarIcon:({color, size}) => 
              (<Ionicons name="ios-cart" size={size} color={color} />),}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;