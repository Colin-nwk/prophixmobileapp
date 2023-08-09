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
import React, { useRef, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../../context/AuthContext";
import Personal from "../../../components/signup/Personal";
import Settings from "../../../components/signup/Settings";
import Verification from "../../../components/signup/Verification";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Signup">;
};

const SignupOne: React.FC<Props> = ({ navigation }) => {
  const { width } = Dimensions.get("window");

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef<object | null>(null);
  const updateCurrentSlideIndex = (e: any) => {
    const currentOffsetX = e.nativeEvent.contentOffset.x;

    const currentIndex = Math.round(currentOffsetX / width);
    setCurrentSlideIndex(currentIndex);

    console.warn(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      console.warn(offset);
    }
    setCurrentSlideIndex(nextSlideIndex);
    console.warn(nextSlideIndex);
  };

  const slides = [
    {
      id: "1",
      title: "Fill your personal information to continue.",
      type: "personal",
      component: <Personal />,
    },
    {
      id: "2",
      title: "Add your preferences to customize your experience.",
      type: "settings",

      component: <Settings />,
    },
    {
      id: "3",
      title: "Create your password and verify your email account.",
      type: "verification",
      component: <Verification />,
    },
  ];

  const TitleSlide = () => {
    return (
      <View className="flex-row mx-auto mt-14" style={{ width: width * 0.95 }}>
        {slides.map((item, index) => (
          <View key={item.id} className="">
            {currentSlideIndex == index ? (
              <Text
                className="text-xl text-gray-700 text-ellipsis"
                numberOfLines={2}
              >
                {item.title}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
    );
  };
  const Header = () => {
    return (
      <View
        // style={{ width: width * 0.95 }}
        className="flex-row justify-center items-center space-x-2 mx-auto w-full mt-5"
      >
        {slides.map((item, index) => (
          <View key={item.id} className="items-center">
            <View
              className={`h-2  rounded-lg ${
                currentSlideIndex >= index ? "bg-primary/80" : "bg-gray-200"
              }`}
              style={{ width: width * 0.31 }}
            ></View>
            <Text className="text-2xl text-slate-500 capitalize mt-2">
              {item.type}
            </Text>
          </View>
          // <View key={item.id}>
          //   <Text>{item.title}</Text>
          // </View>
        ))}
      </View>
    );
  };
  const Slide = ({ item }: any) => {
    return (
      <View
        className=" space-y-4 mx-auto"
        key={item.id}
        style={{ width: width * 0.95 }}
      >
        <View className="my-6">
          <Text
            className="text-xl text-gray-700 text-ellipsis"
            numberOfLines={2}
          >
            {item.title}
          </Text>
        </View>
        {item.component}
      </View>
    );
  };

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
          <Text className="text-4xl text-[#202430] font-bold">Sign up</Text>
        </View>
      </SafeAreaView>
      <TitleSlide />
      <Header />
      <View style={{ width: width * 0.95 }} className=" mx-auto ">
        <FlatList
          ref={ref}
          data={slides}
          // contentContainerStyle={{
          //   // height: height * 0.15,
          //   width: width * 0.95,
          // }}
          pagingEnabled
          horizontal
          onMomentumScrollEnd={updateCurrentSlideIndex}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Slide item={item} />}
        />
      </View>
      <View className="mx-auto mt-14" style={{ width: width * 0.95 }}>
        {currentSlideIndex != slides.length - 1 ? (
          <TouchableOpacity
            className="bg-primary py-4 rounded-lg items-center justify-center border border-primary mx-auto"
            activeOpacity={0.75}
            style={{ width: width * 0.94 }}
            onPress={goNextSlide}
          >
            <Text className="text-white text-center text-2xl ">Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="bg-primary py-4 rounded-lg items-center justify-center border border-primary mx-auto"
            activeOpacity={0.75}
            style={{ width: width * 0.94 }}
          >
            <Text className="text-white text-center text-2xl ">
              Create Account
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SignupOne;
