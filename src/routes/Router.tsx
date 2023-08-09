import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useAuth } from "../context/AuthContext";

const Router = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavigationContainer>
        {isLoggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default Router;
