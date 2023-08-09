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

  const ref = useRef<object | null>(null);
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
        className="items-center  justify-center flex space-y-4"
        key={item.id}
        style={{ width }}
      >
        <Text className="text-4xl font-bold text-ellipsis" numberOfLines={2}>
          {item.title}
        </Text>
        <Text
          className="text-lg mt-1 w-3/4 leading-6 text-center"
          numberOfLines={3}
        >
          {item.description}
        </Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        className=" justify-between my-3 px-5"
        style={{ height: height * 0.1, width: width }}
      >
        <View>
          <View className="flex-row justify-center gap-x-4 items-center ">
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
            <View className="flex-row justify-between  items-center mt-14 mx-1">
              <TouchableOpacity
                className="bg-transparent border border-primary w-40 py-4 rounded-lg flex-row items-center justify-center gap-x-2"
                activeOpacity={0.75}
                onPress={skipSlide}
              >
                <Text className="text-primary text-center text-lg">Skip</Text>
                <Entypo name="forward" size={24} color="#F0363B" />
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-primary w-40 py-4 rounded-lg flex-row items-center justify-center gap-x-2 border border-primary"
                activeOpacity={0.75}
                onPress={goNextSlide}
              >
                <Text className="text-white text-center text-lg">Next</Text>
                <Ionicons name="arrow-forward" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ) : (
            <View className="flex-row justify-end  items-center mt-14 mx-1">
              <TouchableOpacity
                className="bg-primary w-40 py-4 rounded-lg flex-row items-center justify-center gap-x-2 border border-primary"
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
      </View>
    );
  };

  const { width, height } = Dimensions.get("window");

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
    <View className="flex-1  bg-white">
      <StatusBar barStyle="light-content" />
      <OnBoardingImage />
      {/* <View style={{ height: height * 0.6 }} className="rounded-b-full">
        <Image
          source={require("../../../assets/images/general/boarding.png")}
          className="h-full object-cover "
          style={{ width: width }}
        />
      </View>
      <View className="flex justify-center items-center">
        <Image
          source={require("../../../assets/prophix/logoWhite.png")}
          className="h-fit w-fit object-contain z-20 absolute -top-40 "
          // style={{ width: width }}
        />
      </View> */}
      <SafeAreaView style={{ width: width }} className="flex">
        <FlatList
          ref={ref}
          data={slides}
          contentContainerStyle={{
            height: height * 0.15,
            // width: width,
          }}
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
