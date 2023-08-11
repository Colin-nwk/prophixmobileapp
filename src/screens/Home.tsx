import {
  View,
  Text,
  Pressable,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";

import { RouteListProps } from "../types";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Home">;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },

      headerRight: () => (
        <TouchableOpacity
          className="mr-3"
          onPress={() => console.warn("hello")}
        >
          <EvilIcons name="bell" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View className=" bg-white ">
      <SafeAreaView
        className="h-full  mx-auto justify-center items-center"
        style={{ width: width * 0.95 }}
      >
        <View
          className="flex-row overflow-hidden space-x-4"
          style={{ width: width * 0.95 }}
        >
          <Pressable
            className=" bg-[#FFECEF] h-20 rounded active:bg-red-300/30 duration-300 ease-in-out transition-all p-4"
            style={{ width: width * 0.45 }}
            // onPress={() => navigation.navigate("PostJob")}
          >
            <Image
              source={require("../../assets/images/general/work.png")}
              className="h-6 w-6"
            />
            <Text className="text-lg capitalize">My job activity</Text>
          </Pressable>
          <Pressable
            className=" bg-[#DFF1FF] h-20 rounded active:bg-blue-300/30 duration-300 ease-in-out transition-all p-4"
            style={{ width: width * 0.45 }}
          >
            <Image
              source={require("../../assets/images/general/search.png")}
              className="h-6 w-6"
            />
            <Text className="text-lg capitalize">Find a service</Text>
          </Pressable>
        </View>
        <View
          className="flex-row overflow-hidden space-x-4 mt-4"
          style={{ width: width * 0.95 }}
        >
          <Pressable
            className=" bg-[#DFF1FF] h-20 rounded active:bg-blue-300/30 duration-300 ease-in-out transition-all p-4"
            style={{ width: width * 0.45 }}
            onPress={() => navigation.navigate("PostJob")}
          >
            <Image
              source={require("../../assets/images/general/add.png")}
              className="h-6 w-6"
            />
            <Text className="text-lg capitalize">Post a job</Text>
          </Pressable>
          <Pressable
            className=" bg-gray-100 h-20 rounded active:bg-gray-200/30 duration-300 ease-in-out transition-all p-4"
            style={{ width: width * 0.45 }}
          >
            <Image
              source={require("../../assets/images/general/more.png")}
              className="h-6 w-6"
            />
            <Text className="text-lg capitalize">Add quick link</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
