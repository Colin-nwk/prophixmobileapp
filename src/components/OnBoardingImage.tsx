import { View, Dimensions, Image } from "react-native";
import React from "react";

const OnBoardingImage = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <View className="">
        <Image
          source={require("../../assets/images/general/boarding.png")}
          className=""
          style={{
            width: width,
            height: height * 0.7,
            objectFit: "fill",
            // borderBottomRightRadius: 100,
            // borderBottomRightRadius:100,
          }}
        />
      </View>
      <View className="flex justify-center items-center">
        <Image
          source={require("../../assets/prophix/logoWhite.png")}
          className="h-fit w-fit object-contain z-20 absolute -top-28"
          // style={{ width: width }}
        />
      </View>
    </>
  );
};

export default OnBoardingImage;
