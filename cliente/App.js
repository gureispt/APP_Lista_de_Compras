import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ListaComprasScreen from './pages/ListaComprasTela';
import AdicionarItemTela from './pages/AdicionarItemTela';
import Sobre from './pages/Sobre';


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

        
        <Tab.Screen name="Lista" component={ListaComprasScreen} options={{
            tabBarIcon: ({ color, size }) => 
              (<Ionicons name="ios-list" size={size} color={color} />),}}/>

        <Tab.Screen name="Carrinho" component={AdicionarItemTela} options={{ 
            tabBarIcon:({color, size}) => 
              (<Ionicons name="ios-cart" size={size} color={color} />),}}/>

        <Tab.Screen name="Sobre" component={Sobre} options={{ 
            tabBarIcon:({color, size}) => 
              (<Ionicons name="information-circle" size={size} color={color} />),}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;