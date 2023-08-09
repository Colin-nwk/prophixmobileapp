import { createStackNavigator } from "@react-navigation/stack";

import BoardingOne from "../screens/onboarding/BoardingOne";
import BoardingTwo from "../screens/onboarding/BoardingTwo";

import SignupOne from "../screens/auth/signup/SignupOne";
import Login from "../screens/auth/Login";
import Verify from "../screens/auth/Verify";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RouteListProps } from "../types";
import { useEffect, useState } from "react";

const AuthStack = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<boolean | null>(
    null
  );

  const [initialRoute, setInitialRoute] = useState<string>("");

  useEffect(() => {
    checkIsAppFirstLaunchedBefore();
    AsyncStorage.clear();
  }, []);

  const checkIsAppFirstLaunchedBefore = async () => {
    let onboarded = await AsyncStorage.getItem("isFirstTimeBoarded");
    console.warn(onboarded + "first");

    // if (onboarded == "1") {
    //   setInitialRoute("OnboardingTwo");
    //   console.warn(onboarded + "if");
    // } else {
    //   setInitialRoute("OnboardingOne");
    //   console.warn(onboarded + "else");
    // }
    // console.warn(initialRoute.valueOf());
    if (onboarded == "1") {
      setIsAppFirstLaunched(false);
      console.warn(onboarded + "false");
    } else {
      setIsAppFirstLaunched(true);
      console.warn(onboarded + "true");
    }
  };

  const Auth = createStackNavigator<RouteListProps>();

  if (isAppFirstLaunched == null) {
    null;
  }

  if (isAppFirstLaunched == true) {
    return (
      <Auth.Navigator initialRouteName="OnboardingOne">
        <Auth.Screen
          name="OnboardingOne"
          component={BoardingOne}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="OnboardingTwo"
          component={BoardingTwo}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="Signup"
          component={SignupOne}
          options={{ headerShown: false }}
        />

        <Auth.Screen
          name="Verify"
          component={Verify}
          options={{ headerShown: false }}
        />
      </Auth.Navigator>
    );
  }
  if (isAppFirstLaunched == false) {
    return (
      <Auth.Navigator initialRouteName="OnboardingTwo">
        {/* <Auth.Screen
          name="OnboardingOne"
          component={BoardingOne}
          options={{ headerShown: false }}
        /> */}
        <Auth.Screen
          name="OnboardingTwo"
          component={BoardingTwo}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="Signup"
          component={SignupOne}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="Verify"
          component={Verify}
          options={{ headerShown: false }}
        />
      </Auth.Navigator>
    );
  }
};

export default AuthStack;
