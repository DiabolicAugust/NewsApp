import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNavigationContainer } from "react-navigation";
import StackNav from "./navigate/navigate";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Dancing: require("./assets/fonts/Dancing.ttf"),
    BalsamiqBold: require("./assets/fonts/BalsamiqSans-Bold.ttf"),
    BalsamiqReg: require("./assets/fonts/BalsamiqSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <StackNav />;
}
