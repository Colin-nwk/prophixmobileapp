import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../types";
import OnBoardingImage from "../../components/OnBoardingImage";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "OnboardingTwo">;
};
const BoardingTwo: React.FC<Props> = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="light-content" />

      <OnBoardingImage />
      <SafeAreaView
        className="mx-auto justify-center items-center  gap-y-10"
        style={{ width: width * 0.95 }}
      >
        <TouchableOpacity
          className="bg-primary py-4 rounded-lg flex-row items-center justify-center gap-x-2 border border-primary"
          activeOpacity={0.75}
          style={{ width: width * 0.9 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white text-center text-2xl ">
            Continue as User
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-black py-4 rounded-lg flex-row items-center justify-center gap-x-2 border border-black"
          activeOpacity={0.75}
          style={{ width: width * 0.9 }}
        >
          <Text className="text-white text-center text-2xl ">
            Continue as a Worker
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-white  py-4 rounded-lg flex-row items-center justify-center gap-x-2 border border-black "
          activeOpacity={0.75}
          style={{ width: width * 0.9 }}
        >
          <Text className="text-black text-center text-2xl ">
            Continue as Vendor
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default BoardingTwo;
