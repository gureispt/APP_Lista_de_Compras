import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import Home from "./pages/Home";
import Login from "./Login";
import ListaCompras from "./pages/ListaCompras";
import Carrinho from "./pages/Carrinho";
import Sobre from "./pages/Sobre";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Tab = createBottomTabNavigator();
const App = () => {
  const [logado, setLogado] = useState(false);

  const verificaLogado = async () => {
    const log = await AsyncStorage.getItem("logado");
    if(log) setLogado('logado');
    else setLogado('deslogado')
  };

  useEffect( () => {
    verificaLogado();
  }, [])
  // useFocusEffect(React.useCallback(() => {
  //   // verificaLogado();
  // }, []));

  if (logado == 'logado') {
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
            name="Login"
            component={Login}
            options={{
              tabBarButton: () => null,
              tabBarStyle: {'display': 'none'}
            }}
          />

        
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return <Login/>;
  }
};

export default App;
