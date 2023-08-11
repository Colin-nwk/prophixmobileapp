import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const { width } = Dimensions.get("window");
  return (
    <SafeAreaView className="space-y-6">
      <View className="space-y-2">
        <Text className="text-lg font-bold ml-1">Address</Text>
        <TextInput
          placeholder="Enter your Address"
          className="bg-gray-100 py-2.5 rounded-lg  border border-gray-100 text-lg px-6 "
          placeholderTextColor="gray"
          // autoFocus
          style={{ width: width * 0.94 }}
        />
      </View>
      <View className="space-y-2">
        <Text className="text-lg font-bold ml-1">Bio</Text>
        <TextInput
          placeholder="e.g I'm a Professional welder with 10 years of experience in..."
          className="bg-gray-100 py-2.5 rounded-lg  border border-gray-100 text-lg px-6 text-ellipsis"
          style={{ width: width * 0.94 }}
          placeholderTextColor="gray"
          numberOfLines={4}
          multiline
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
