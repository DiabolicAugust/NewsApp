import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import News from "../screens/News";
import NewsDetails from "../screens/NewsDetails";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
