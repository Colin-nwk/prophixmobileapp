import { View, Dimensions, Image } from "react-native";
import React from "react";

const OnBoardingImage = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <View style={{ height: height * 0.6 }} className="rounded-b-full">
        <Image
          source={require("../../assets/images/general/boarding.png")}
          className="h-full object-cover "
          style={{ width: width }}
        />
      </View>
      <View className="flex justify-center items-center">
        <Image
          source={require("../../assets/prophix/logoWhite.png")}
          className="h-fit w-fit object-contain z-20 absolute -top-40 "
          // style={{ width: width }}
        />
      </View>
    </>
  );
};

export default OnBoardingImage;
