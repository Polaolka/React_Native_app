import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import PostsScreen from "./Screens/PostsScreen";
import Home from "./Screens/Home";
import FlashMessage from "react-native-flash-message";


const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">{/* Аналог Routes */}
        <MainStack.Screen name="Register" component={RegistrationScreen} />{/* Аналог Route */}
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Posts" component={PostsScreen} />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Start screen" }}
        />
      </MainStack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
