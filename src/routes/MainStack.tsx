import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteListProps } from "../types";
import DrawerStack from "./DrawerStack";
import PostJob from "../screens/jobs/PostJob";
import MyActivity from "../screens/activity/MyActivity";
import Services from "../screens/services/Services";
import JobPosted from "../screens/activity/JobPosted";

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
      <Stack.Screen
        name="MyActivity"
        component={MyActivity}
        options={{ headerTitle: "My Job Activity" }}
      />
      <Stack.Screen
        name="JobsPosted"
        component={JobPosted}
        options={{ headerTitle: "Jobs Posted" }}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{ headerTitle: "Services" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
