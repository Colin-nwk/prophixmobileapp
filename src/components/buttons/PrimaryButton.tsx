import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface PrimaryButtonProps {
  label: string;
  isCallable?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, isCallable }) => {
  const { width } = Dimensions.get("window");
  return (
    <View>
      <TouchableOpacity
        className="bg-primary py-2.5 rounded-lg items-center justify-center border border-primary "
        activeOpacity={0.75}
        style={{ width: width * 0.94 }}
        onPress={isCallable}
      >
        <Text className="text-white text-center text-xl ">{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
