import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../types";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "MyActivity">;
};

const MyActivity: React.FC<Props> = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <View className="bg-white w-full flex-1 h-full">
        <TouchableOpacity
          className="border-y border-gray-200 p-5"
          activeOpacity={0.75}
          onPress={() => navigation.navigate("JobsPosted")}
        >
          <Text className="text-lg text-slate-600">My Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border-y border-gray-200 p-5"
          activeOpacity={0.75}
          onPress={() => navigation.navigate("JobsPosted")}
        >
          <Text className="text-lg text-slate-600">My Requests Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border-y border-gray-200 p-5"
          activeOpacity={0.75}
          onPress={() => navigation.navigate("JobsPosted")}
        >
          <Text className="text-lg text-slate-600">My Ongoing Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border-y border-gray-200 p-5"
          activeOpacity={0.75}
          onPress={() => navigation.navigate("JobsPosted")}
        >
          <Text className="text-lg text-slate-600">My Completed Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border-y border-gray-200 p-5"
          activeOpacity={0.75}
          onPress={() => navigation.navigate("JobsPosted")}
        >
          <Text className="text-lg text-slate-600">My Canceled Jobs</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MyActivity;
