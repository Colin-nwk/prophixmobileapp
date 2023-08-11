import {
  View,
  Text,
  TextInput,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

const Personal = () => {
  const { width } = Dimensions.get("window");
  return (
    <SafeAreaView className="space-y-6">
      <View className="space-y-2">
        <Text className="text-lg font-bold ml-1">First Name</Text>
        <TextInput
          placeholder="Enter First Name"
          className="bg-gray-100 py-2.5 rounded-lg  border border-gray-100 text-lg px-6 "
          placeholderTextColor="gray"
          // autoFocus
          style={{ width: width * 0.94 }}
        />
      </View>
      <View className="space-y-2">
        <Text className="text-lg font-bold ml-1">Last Name</Text>
        <TextInput
          placeholder="Enter Last Name"
          className="bg-gray-100 py-2.5 rounded-lg border border-gray-100 text-lg px-6"
          placeholderTextColor="gray"
          style={{ width: width * 0.94 }}
        />
      </View>

      {/* <View>
        <TouchableOpacity
          className="bg-primary py-4 rounded-lg items-center justify-center border border-primary mx-auto"
          activeOpacity={0.75}
          style={{ width: width * 0.94 }}
        >
          <Text className="text-white text-center text-2xl ">Next</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default Personal;
