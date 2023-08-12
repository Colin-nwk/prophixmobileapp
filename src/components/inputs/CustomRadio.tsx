import { View, Text, Pressable, Dimensions } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "@rneui/themed";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { Controller, Control, FieldErrors } from "react-hook-form";

interface CustomRadioProps {
  rules?: Record<string, any>;
  control: Control;
  name: string;
  label: string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  rules = {},
  control,
  name,
  label,
}) => {
  const { width } = Dimensions.get("window");
  const [ischecked, setIschecked] = useState(true);
  return (
    <View className="">
      <Text className="text-lg font-bold -mb-3">{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <View className="flex-row">
            <View>
              <CheckBox
                // checked={value}
                // onTouchEnd={}
                checked={true}
                onPress={(value) => console.warn(value)}
                // onPress={() => setIschecked(!ischecked)}
                // onPress={() => onChange(ischecked)}
                // onTouchEnd={}
                disabled
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={"checkbox-blank-outline"}
                // checkedIcon="dot-circle-o"
                // uncheckedIcon="circle-o"

                containerStyle={{
                  // width: "95%",
                  // backgroundColor: "red",
                  marginLeft: 0,
                  paddingLeft: 0,
                }}
                textStyle={{ fontSize: 40 }}
              />
              {/* {error && (
                <Text className="text-red-600 text-xs text-left -mt-4">
                  {error.message || "error"}
                </Text>
              )} */}
            </View>
            <TouchableOpacity
              style={{ width: width * 0.95 }}
              onPress={() => setIschecked(!ischecked)}
            >
              <Text className="mt-3 w-4/5 " numberOfLines={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                corrupti inventore laborum facere sapiente est laboriosam illo
                iusto eius error veniam id voluptates in nostrum nihil adipisci
                architecto? Eaque, consequuntur.
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default CustomRadio;
