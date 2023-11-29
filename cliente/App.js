import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ListaComprasTela from './telas/ListaComprasTela';
import AdicionarItemTela from './telas/AdicionarItemTela';
import Home from './telas/Home';
import Sobre from './telas/Sobre';

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
        }} // com o Tab Navigator só é possível usar 3 telas
      >
          
        <Tab.Screen name="Página Inicial" component={Home} options={{ 
        tabBarIcon:({color, size}) => (<Ionicons name="ios-home" size={size} color={color} />),}}/>

        <Tab.Screen name="Lista" component={ListaComprasTela} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name="ios-list" size={size} color={color} />),}}/>

        <Tab.Screen name="Carrinho" component={AdicionarItemTela} options={{ 
        tabBarIcon:({color, size}) => (<Ionicons name="ios-cart" size={size} color={color} />),}}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;