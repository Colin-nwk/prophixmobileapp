import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/inputs/CustomInput";
import CustomTextarea from "../../components/inputs/CustomTextarea";
import SelectedInput from "../../components/inputs/SelectedInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../types";

import { SafeAreaView } from "react-native-safe-area-context";
import { CheckBox, TabView } from "@rneui/themed";
import { EvilIcons } from "@expo/vector-icons";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "PostJob">;
};

const PostJob: React.FC<Props> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { width, height } = Dimensions.get("window");
  const [index, setIndex] = useState(0);
  const [ischecked, setIschecked] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handlePOstJob = (data: any) => {
    setIsSuccess(!isSuccess);
    setTimeout(() => {
      setIsSuccess(!isSuccess);
    }, 3000);
    console.warn(data);
  };
  const showToasts = () => {};
  const goNextSlide = () => {
    const nextSlideIndex = index + 1;
    if (nextSlideIndex <= 2) {
      setIndex(nextSlideIndex);
    }
  };
  const goPreviousSlide = () => {
    const previousSlideIndex = index - 1;
    if (previousSlideIndex >= 0) {
      setIndex(previousSlideIndex);
    }
  };
  return (
    <View className="flex-1 bg-white">
      {isSuccess && (
        <View
          className="border-l-4  border-y  border-y-gray-300 border-r-gray-300 border-r border-l-green-700 px-4 py-3 mx-auto rounded-md flex-row justify-between items-center"
          style={{ width: width * 0.95 }}
        >
          <Text className="text-base">Job posted successfully</Text>
          <EvilIcons
            name="close"
            size={24}
            color="black"
            onPress={() => setIsSuccess(!isSuccess)}
          />
        </View>
      )}
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <View className=" flex-1 justify-between items-center">
            <View style={{ width: width * 0.95 }} className="mx-auto mt-2">
              <Text className="text-xl text-[#202430]">
                Publish your job listing free of charge!
              </Text>

              {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding': ''}></KeyboardAvoidingView> */}
              <View className="mt-5">
                <SelectedInput
                  name="service"
                  label="What service do you need?"
                  placeholder="Select a service"
                  control={control}
                  rules={{
                    required: "service category is required",
                  }}
                />
                <CustomTextarea
                  name="description"
                  label="Describe the service in details?"
                  placeholder="describe the service"
                  control={control}
                  rules={{
                    required: "description is required",
                    minLength: {
                      value: 6,
                      message: "description should be min of 6 characters",
                    },
                  }}
                />
                {/*
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  >
                  </KeyboardAvoidingView> */}
                <CustomInput
                  name="skills"
                  label="Skills needed"
                  placeholder="enter skills needed exmaple: javascript, php, reactjs"
                  control={control}
                  rules={{
                    required: "skills is required",
                  }}
                />
                <CustomInput
                  name="requirements"
                  label="Add job requirments"
                  placeholder="enter requirements exmaple: 2years experience"
                  control={control}
                  rules={{
                    required: "requirement cannot be empty",
                  }}
                />
              </View>
            </View>
            <View className=" mb-2 mx-auto">
              <PrimaryButton label="Next" isCallable={goNextSlide} />
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <View className=" flex-1 justify-between items-center">
            <View style={{ width: width * 0.95 }} className="mx-auto mt-2">
              <Text className="text-xl text-[#202430]" numberOfLines={1}>
                Provide additional details about the job
              </Text>

              <View className="mt-5">
                <CustomInput
                  name="budget"
                  label="What is your budget?"
                  placeholder="enter your budget for the job "
                  control={control}
                  rules={{
                    required: "budget is required",
                  }}
                />
                <SelectedInput
                  name="visibility"
                  label="Job visibility period"
                  placeholder="how long do you ads to last"
                  control={control}
                  rules={{
                    required: "job visibility period",
                  }}
                />
                {/* <CustomRadio
                  name="terms"
                  label="terms and conditions"
                  control={control}
                  rules={{
                    required: "terms is required",
                  }}
                /> */}
                <View className="flex-row">
                  <CheckBox
                    checked={ischecked}
                    onPress={() => setIschecked(!ischecked)}
                    iconType="material-community"
                    checkedIcon="checkbox-outline"
                    uncheckedIcon={"checkbox-blank-outline"}
                    // checkedIcon="dot-circle-o"
                    // uncheckedIcon="circle-o"

                    containerStyle={{
                      marginLeft: 0,
                      paddingLeft: 0,
                    }}
                    textStyle={{ fontSize: 40 }}
                  />
                  <TouchableOpacity
                    style={{ width: width * 0.95 }}
                    onPress={() => setIschecked(!ischecked)}
                  >
                    <Text className="mt-3 w-4/5 " numberOfLines={2}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non, corrupti inventore laborum facere sapiente est
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {ischecked && (
              <View className=" mb-2 mx-auto">
                <PrimaryButton
                  label="Post Job"
                  isCallable={handleSubmit(handlePOstJob)}
                />
              </View>
            )}
          </View>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default PostJob;
