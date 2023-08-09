import {
  TouchableOpacity,
  View,
  Platform,
  Text,
  TextInput,
  Dimensions,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../types";
import { StatusBar } from "expo-status-bar";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Signup">;
};

const Verify: React.FC<Props> = ({ navigation }) => {
  return (
    <View className="flex-1 w-full h-full bg-white">
      <StatusBar style="auto" />
      <SafeAreaView className="w-full mx-auto">
        <View className="flex-row mt-2 justify-start items-center  space-x-5 ">
          <TouchableOpacity
            className="ml-2 pr-[2px] rounded-full border w-8 h-8 justify-center items-end border-gray-600/30"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-4xl text-[#202430] font-bold">
            Verify Account
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Verify;
