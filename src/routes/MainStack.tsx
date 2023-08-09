import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteListProps } from "../types";
import DrawerStack from "./DrawerStack";

const MainStack = () => {
  const Stack = createStackNavigator<RouteListProps>();
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerStack}
        options={{ headerShown: false }}
      />

      {/* <MainStack.Screen
        name="Bottom"
        component={Bottom}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
