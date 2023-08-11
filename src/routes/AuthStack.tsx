import { createStackNavigator } from "@react-navigation/stack";

import BoardingOne from "../screens/onboarding/BoardingOne";
import BoardingTwo from "../screens/onboarding/BoardingTwo";

import SignupOne from "../screens/auth/signup/SignupOne";
import Login from "../screens/auth/Login";
import Verify from "../screens/auth/Verify";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RouteListProps } from "../types";
import React, { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
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
          options={
            {
              // headerLeft: () => (
              //   <Ionicons
              //     name="arrow-back-circle-outline"
              //     size={30}
              //     color="gray"
              //     className="ml-10"
              //     style={{ marginLeft: 10 }}
              //   />
              // ),
              // headerTitle: "",
            }
          }
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
          // options={{ headerShown: false }}
        />
        <Auth.Screen
          name="Login"
          component={Login}
          // options={{ headerShown: false }}
        />
        <Auth.Screen
          name="Verify"
          component={Verify}
          // options={{ headerShown: false }}
        />
      </Auth.Navigator>
    );
  }
};

export default AuthStack;

// import { createStackNavigator } from "@react-navigation/stack";
// import React, { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import BoardingOne from "../screens/onboarding/BoardingOne";
// import BoardingTwo from "../screens/onboarding/BoardingTwo";
// import SignupOne from "../screens/auth/signup/SignupOne";
// import Login from "../screens/auth/Login";
// import Verify from "../screens/auth/Verify";
// import { RouteListProps } from "../types";

// const AuthStack = () => {
//   const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<boolean | null>(
//     null
//   );

//   useEffect(() => {
//     checkIsAppFirstLaunchedBefore();
//     // AsyncStorage.clear(); // Remove this line unless you intentionally want to clear AsyncStorage on every render
//   }, []);

//   const checkIsAppFirstLaunchedBefore = async () => {
//     let onboarded = await AsyncStorage.getItem("isFirstTimeBoarded");
//     const isFirstTimeBoarded = onboarded === "1";
//     setIsAppFirstLaunched(!isFirstTimeBoarded);
//   };

//   const Auth = createStackNavigator<RouteListProps>();
//   const initialRouteName = isAppFirstLaunched
//     ? "OnboardingOne"
//     : "OnboardingTwo";

//   return (
//     <Auth.Navigator initialRouteName={initialRouteName}>
//       {!isAppFirstLaunched && (
//         <Auth.Screen
//           name="OnboardingTwo"
//           component={BoardingTwo}
//           options={{ headerShown: false }}
//         />
//       )}
//       <Auth.Screen
//         name="OnboardingOne"
//         component={BoardingOne}
//         options={{ headerShown: false }}
//       />
//       <Auth.Screen
//         name="Login"
//         component={Login}
//         options={{ headerShown: false }}
//       />
//       <Auth.Screen
//         name="Signup"
//         component={SignupOne}
//         options={{ headerShown: false }}
//       />
//       <Auth.Screen
//         name="Verify"
//         component={Verify}
//         options={{ headerShown: false }}
//       />
//     </Auth.Navigator>
//   );
// };

// export default AuthStack;
