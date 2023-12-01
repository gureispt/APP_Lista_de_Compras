import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ListaComprasScreen from "./pages/ListaComprasTela";
import Carrinho from "./pages/Carrinho";
import Sobre from "./pages/Sobre";

const Tab = createBottomTabNavigator();

const App = () => {
  if (true) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            //estilização do texto dos ícones
            activeTintColor: "blue", // cor do ícone ativo
            inactiveTintColor: "gray", // cor do ícone inativo
            labelStyle: {
              fontSize: 15,
              fontWeight: "bold",
            },
            style: {
              backgroundColor: "white", // cor de fundo da barra de abas
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Lista"
            component={ListaComprasScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-list" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Carrinho"
            component={Carrinho}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-cart" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Sobre"
            component={Sobre}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-circle" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (Login);
  }
};

export default App;
