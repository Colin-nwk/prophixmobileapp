import {
  TouchableOpacity,
  View,
  Platform,
  Text,
  TextInput,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
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
  // const ios = Platform.OS.

  const { isLoggedIn, handleLogin, handleLogout } = useAuth();
  return (
    <View className="flex-1 w-full h-full bg-white">
      <StatusBar style="auto" />
      <SafeAreaView className="w-full mx-auto">
        <TouchableOpacity
          className="ml-2 mt-2 pr-[2px] rounded-full border w-8 h-8 justify-center items-end border-gray-600/30"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </SafeAreaView>
      <View
        className="justify-center  gap-y-4 mt-10 mx-auto  "
        style={{ width: width * 0.94 }}
      >
        <View className="justify-start gap-y-2">
          <Text className="text-4xl leading-relaxed">Welcome !</Text>
          <Text className="text-xl text-gray-700">
            Log In as a skilled professional
          </Text>
        </View>
        <View className="gap-y-6">
          <View className="space-y-2">
            <Text className="text-xl font-bold">Email</Text>
            <TextInput
              placeholder="Enter Email"
              className="bg-gray-100 py-4 rounded-lg items-center justify-center border border-gray-100 mx-auto w-full text-lg px-6"
              placeholderTextColor="gray"
              autoFocus
            />
          </View>
          <View className="space-y-2">
            <Text className="text-xl font-bold">Password</Text>
            <TextInput
              placeholder="Enter Password"
              className="bg-gray-100 py-4 rounded-lg items-center justify-center border border-gray-100 mx-auto w-full text-lg px-6"
              placeholderTextColor="gray"
              secureTextEntry
            />
          </View>
          <View className="space-y-8">
            <TouchableOpacity
              className="bg-primary py-4 rounded-lg items-center justify-center border border-primary mx-auto"
              activeOpacity={0.75}
              style={{ width: width * 0.94 }}
              onPress={handleLogin}
            >
              <Text className="text-white text-center text-2xl ">Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-primary py-4 rounded-lg items-center justify-center border border-primary mx-auto"
              activeOpacity={0.75}
              style={{ width: width * 0.94 }}
              onPress={() => navigation.navigate("Verify")}
            >
              <Text className="text-white text-center text-2xl ">Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="justify-center items-center">
          <Text className="text-2xl">or</Text>
        </View>

        <View className="justify-center items-center">
          <TouchableOpacity
            className="bg-white mx-auto py-4 rounded-lg flex-row items-center justify-center  border border-black/25 space-x-2 "
            activeOpacity={0.75}
            style={{ width: width * 0.94 }}
          >
            <Image
              source={require("../../../assets/prophix/google-icon.png")}
              style={{ width: 25, height: 25 }}
            />
            <Text className="text-gray-500 text-center text-2xl ">
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          <TouchableOpacity
            className="justify-center items-center "
            onPress={() => navigation.navigate("Signup")}
          >
            <Text className="text-2xl text-gray-800">
              Don't have an account <Text className="underline">Signu up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
