import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RouteListProps } from "../types";

import BottomStack from "./BottomStack";
import Profile from "../screens/protected/Profile";

const DrawerStack = () => {
  const Drawer = createDrawerNavigator<RouteListProps>();
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Bottom"
          component={BottomStack}
          options={{ headerShown: false, drawerLabel: "Home" }}
        />

        <Drawer.Screen
          name="Profile"
          component={Profile}
          // options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerStack;
