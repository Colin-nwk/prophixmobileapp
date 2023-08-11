import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteListProps } from "../types";
import DrawerStack from "./DrawerStack";
import PostJob from "../screens/jobs/PostJob";

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

      <Stack.Screen
        name="PostJob"
        component={PostJob}
        options={{ headerTitle: "Post Job" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
