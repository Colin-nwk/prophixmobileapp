import {
  TouchableOpacity,
  View,
  Platform,
  Text,
  TextInput,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import MainButton from "../../components/buttons/MainButton";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../types";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../context/AuthContext";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Login">;
};
const Login: React.FC<Props> = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
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

  const { handleLogin, handleLogout } = useAuth();
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />

      <View
        className="justify-center  gap-y-4 mx-auto  "
        style={{ width: width * 0.94 }}
      >
        <SafeAreaView className="justify-start space-y-2">
          <Text className="text-xl leading-relaxed font-bold">Welcome !</Text>
          <Text className="text-xl text-gray-700">
            Log In as a skilled professional
          </Text>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="space-y-4">
            <View className="space-y-2">
              <Text className="text-lg font-bold">Email</Text>
              <TextInput
                placeholder="Enter Email"
                className="bg-gray-100 py-2.5 rounded-lg items-center justify-center border border-gray-100 text-lg px-6"
                placeholderTextColor="gray"
                autoFocus
              />
            </View>
            <View className="space-y-2">
              <Text className="text-lg font-bold">Password</Text>
              <TextInput
                placeholder="Enter Password"
                className="bg-gray-100 py-2.5 rounded-lg items-center justify-center border border-gray-100 text-lg px-6"
                placeholderTextColor="gray"
                secureTextEntry
              />
            </View>
            <View className="space-y-6">
              <TouchableOpacity
                className="bg-primary py-2.5 rounded-lg items-center justify-center border border-primary "
                activeOpacity={0.75}
                style={{ width: width * 0.94 }}
                onPress={handleLogin}
              >
                <Text className="text-white text-center text-xl ">Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-primary py-2.5 rounded-lg items-center justify-center border border-primary "
                activeOpacity={0.75}
                style={{ width: width * 0.94 }}
                onPress={() => navigation.navigate("Verify")}
              >
                <Text className="text-white text-center text-xl ">Verify</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="justify-center items-center">
            <Text className="text-2xl">or</Text>
          </View>

          <View className="justify-center items-center">
            <TouchableOpacity
              className="bg-white mx-auto py-2.5 rounded-lg flex-row items-center justify-center  border border-black/25 space-x-2 "
              activeOpacity={0.75}
              style={{ width: width * 0.94 }}
            >
              <Image
                source={require("../../../assets/prophix/google-icon.png")}
                style={{ width: 25, height: 25 }}
              />
              <Text className="text-gray-500 text-center text-xl ">
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-3">
            <TouchableOpacity
              className="justify-center items-center "
              onPress={() => navigation.navigate("Signup")}
            >
              <Text className="text-xl text-gray-800">
                Don't have an account{" "}
                <Text className="underline">Signu up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
