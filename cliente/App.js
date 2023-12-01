import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ListaCompras from "./pages/ListaCompras";
import Carrinho from "./pages/Carrinho";
import Sobre from "./pages/Sobre";
import Editar from "./pages/Editar";

const Tab = createBottomTabNavigator();

const App = () => {
  if (true) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            //estilização do texto dos ícones

            tabBarActiveTintColor: "blue", // cor do ícone ativo
            tabBarInactiveTintColor: "gray", // cor do ícone inativo
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: "bold",
            },
            tabBarStyle: {
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
            component={ListaCompras}
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
          <Tab.Screen
            name="Editar"
            component={Editar}
            options={{
              tabBarButton: () => null,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Login />;
  }
};

export default App;
