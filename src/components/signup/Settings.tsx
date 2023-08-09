import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

const Settings = () => {
  const { width } = Dimensions.get("window");
  return (
    <View className="space-y-6">
      <View className="space-y-2 w-full">
        <Text className="text-xl font-bold ml-1">Address</Text>
        <TextInput
          placeholder="Enter your Address"
          className="bg-gray-100 py-4 rounded-lg  border border-gray-100 text-lg px-6 mx-auto"
          placeholderTextColor="gray"
          // autoFocus
          style={{ width: width * 0.94 }}
        />
      </View>
      <View className="space-y-2">
        <Text className="text-xl font-bold ml-1">Bio</Text>
        <TextInput
          placeholder="e.g I'm a Professional welder with 10 years of experience in..."
          className="bg-gray-100 py-4 rounded-lg  border border-gray-100 text-lg px-6 mx-auto text-ellipsis"
          style={{ width: width * 0.94 }}
          placeholderTextColor="gray"
          numberOfLines={3}
        />
      </View>
    </View>
  );
};

export default Settings;
