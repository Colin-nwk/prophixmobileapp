import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  title: string;
};

const MainButton: React.FC<Props> = ({ title }) => {
  const { width } = Dimensions.get("window");
  return (
    <TouchableOpacity
      className="bg-primary py-4 rounded-lg items-center justify-center border border-primary mx-auto"
      activeOpacity={0.75}
      style={{ width: width * 0.9 }}
    >
      <Text className="text-white text-center text-2xl ">{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
