import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../types";
import { StatusBar } from "expo-status-bar";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Signup">;
};

const Verify: React.FC<Props> = React.memo(({ navigation }) => {
  const { width } = Dimensions.get("window");

  const [otpCode, setOTPCode] = useState<string>("");

  const maximumCodeLength = 6;

  const boxArray = new Array(maximumCodeLength).fill(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Verify Account",
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },

      headerLeft: () => (
        <Pressable className="ml-3" onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={24}
            className="border-gray-600/30"
            color="gray"
          />
        </Pressable>
      ),
    });
  }, []);

  const Boxes = () => {
    return (
      <View
        className="mx-auto space-x-2 flex-row justify-center items-center"
        style={{ width: width * 0.95 }}
      >
        {boxArray.map((_, index) => (
          <View
            style={{
              width: (width * 0.85) / maximumCodeLength,
              height: (width * 0.85) / maximumCodeLength,
            }}
            className={`rounded-lg items-center justify-center border ${
              index == otpCode.length
                ? "border-primary bg-primary/10 "
                : "border-gray-100 bg-gray-100"
            }`}
            key={index}
          >
            <Text className=" text-5xl mt-2.5">{otpCode[index] || ""}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View className="flex-1  bg-white">
      <StatusBar style="auto" />
      <SafeAreaView
        className="mx-auto space-y-2 "
        style={{ width: width * 0.95 }}
      >
        <Text className="text-2xl leading-relaxed text-slate-600">
          We've sent a code to:
        </Text>
        <Text className="text-2xl leading-relaxed font-bold text-slate-600">
          johnathan2346@gmail.com
        </Text>
        <Text className="text-xl text-gray-500">
          Log In as a skilled professional
        </Text>
      </SafeAreaView>

      <View className="mt-8">
        <TextInput
          placeholder="PIN"
          className="bg-gray-100 py-4 rounded-lg items-center justify-center border border-gray-100  text-3xl  absolute top-0 opacity-0 z-50 mx-auto pl-4"
          style={{ width }}
          value={otpCode}
          onChangeText={setOTPCode}
          maxLength={maximumCodeLength}
          // ref={inputRef}
          keyboardType="numeric"
          autoFocus
          onSubmitEditing={() =>
            otpCode.length === maximumCodeLength && navigation.navigate("Login")
          }
        />
        {/* opt box */}
        <Boxes />
      </View>
    </View>
  );
});

export default Verify;
