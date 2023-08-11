import { View, Text, Dimensions } from "react-native";
import React from "react";

const PostJob = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View className="flex-1 bg-white">
      <View style={{ width: width * 0.95 }} className="mx-auto mt-4">
        <Text className="text-xl text-[#202430]">
          Publish your job listing free of charge!
        </Text>
      </View>
    </View>
  );
};

export default PostJob;
