import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoardingImage from "../../components/OnBoardingImage";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "OnboardingOne">;
};

const BoardingOne: React.FC<Props> = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const { width, height } = Dimensions.get("window");

  const ref = useRef<FlatList | null>(null);
  const slides = [
    {
      id: "1",
      title: "Welcome to Prophix 1",
      description:
        "Need help with your task? Let's connect you with skilled service providers in your area.",
    },
    {
      id: "2",
      title: "Welcome to Prophix 2",
      description:
        "Need help with your task? Let's connect you with skilled service providers in your area.",
    },
    {
      id: "3",
      title: "Welcome to Prophix 3",
      description:
        "Need help with your task? Let's connect you with skilled service providers in your area.",
    },
  ];

  const isBoarded = () => {
    navigation.replace("OnboardingTwo");
    AsyncStorage.setItem("isFirstTimeBoarded", "1");
  };
  const Slide = ({ item }: any) => {
    return (
      <View
        className="items-center  justify-center  space-y-1.5 mx-auto"
        key={item.id}
        style={{ width: width * 0.95 }}
      >
        <Text className="text-2xl font-bold text-ellipsis" numberOfLines={2}>
          {item.title}
        </Text>
        <Text
          className="text-lg text-ellipsis px-4 leading-6 text-center"
          numberOfLines={3}
        >
          {item.description}
        </Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View className="  mt-2">
        <View className="flex-row justify-center space-x-4 items-center ">
          {slides.map((_, index) => (
            <View
              className={`h-3 w-3  rounded-full ${
                currentSlideIndex == index ? "bg-primary" : "bg-slate-300"
              }`}
              key={index}
            ></View>
          ))}
        </View>

        {currentSlideIndex != slides.length - 1 ? (
          <View className="flex-row justify-between  items-center mt-3  ">
            <TouchableOpacity
              className="bg-transparent border border-primary w-28 py-2 rounded-lg flex-row items-center justify-center space-x-2"
              activeOpacity={0.75}
              onPress={skipSlide}
            >
              <Text className="text-primary text-center text-lg">Skip</Text>
              <Entypo name="forward" size={24} color="#F0363B" />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-primary w-28 py-2 rounded-lg flex-row items-center justify-center space-x-2 border border-primary"
              activeOpacity={0.75}
              onPress={goNextSlide}
            >
              <Text className="text-white text-center text-lg">Next</Text>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex-row justify-end  items-center mt-3">
            <TouchableOpacity
              className="bg-primary w-36 py-2 rounded-lg flex-row items-center justify-center space-x-2 border border-primary"
              activeOpacity={0.75}
              onPress={isBoarded}
            >
              <Text className="text-white text-center text-xl">
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const updateCurrentSlideIndex = (e: any) => {
    const currentOffsetX = e.nativeEvent.contentOffset.x;

    const currentIndex = Math.round(currentOffsetX / width);
    setCurrentSlideIndex(currentIndex);

    // console.warn(currentIndex);
  };

  const skipSlide = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });

    setCurrentSlideIndex(lastSlideIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
    }

    setCurrentSlideIndex(nextSlideIndex);
  };
  return (
    <View className="flex-1  ">
      <StatusBar barStyle="light-content" />
      <OnBoardingImage />
      <SafeAreaView style={{ width: width * 0.95 }} className="  mt-1 mx-auto">
        <FlatList
          ref={ref}
          data={slides}
          // contentContainerStyle={{
          //   height: height * 0.2,
          //   // width: width,
          // }}
          pagingEnabled
          horizontal
          onMomentumScrollEnd={updateCurrentSlideIndex}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Slide item={item} />}
        />
        <Footer />
      </SafeAreaView>
    </View>
  );
};

export default BoardingOne;
