import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Verification = () => {
  const { width } = Dimensions.get("window");
  return (
    <SafeAreaView className="space-y-6" style={{ width: width * 0.95 }}>
      <View className="space-y-2">
        <Text className="text-lg font-bold ml-1">Email</Text>
        <TextInput
          placeholder="Enter Email"
          className="bg-gray-100 py-2.5 rounded-lg border border-gray-100 text-lg px-6"
          placeholderTextColor="gray"
          style={{ width: width * 0.94 }}
          // autoFocus
          keyboardType="email-address"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-lg font-bold ml-1">Mobile</Text>
        <TextInput
          placeholder="Enter Mobile"
          className="bg-gray-100 py-2.5 rounded-lg border border-gray-100 text-lg px-6"
          placeholderTextColor="gray"
          style={{ width: width * 0.94 }}
          keyboardType="number-pad"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-lg font-bold ml-1">Password</Text>
        <TextInput
          placeholder="Enter Password"
          className="bg-gray-100 py-2.5 rounded-lg border border-gray-100 text-lg px-6"
          placeholderTextColor="gray"
          style={{ width: width * 0.94 }}
          secureTextEntry
        />
      </View>
    </SafeAreaView>
  );
};

export default Verification;
