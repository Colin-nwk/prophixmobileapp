import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteListProps } from "../types";
import Home from "../screens/Home";

import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Favorite from "../screens/protected/Favorite";
import Message from "./../screens/protected/Message";

const BottomStack = () => {
  const Bottom = createBottomTabNavigator<RouteListProps>();
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerShown: false,
        tabBarStyle: { padding: 5 },
        tabBarActiveTintColor: "#F0363B",
      }}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Feather
              name="home"
              size={size}
              color={focused ? "#F0363B" : color}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name="ios-heart-outline"
              size={size}
              color={focused ? "#F0363B" : color}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons
              name="message-outline"
              size={size}
              color={focused ? "#F0363B" : color}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomStack;

<Ionicons name="ios-heart-outline" size={24} color="black" />;
