import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

import { Controller, Control, FieldErrors } from "react-hook-form";

interface CustomInputProps {
  rules?: Record<string, any>;
  control: Control;
  name: string;
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const { width } = Dimensions.get("window");
const CustomTextarea: React.FC<CustomInputProps> = ({
  rules = {},
  control,
  name,
  placeholder,
  label,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onBlur, onChange },
          fieldState: { error },
        }) => (
          <>
            <View className="mb-3.5" style={{ width: width * 0.94 }}>
              <Text className="text-lg font-bold mb-1.5">{label}</Text>
              <TextInput
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`bg-gray-100 py-2.5 rounded-lg items-start border  text-lg px-6 justify-start ${
                  error ? "border-red-600" : "border-gray-100"
                }`}
                numberOfLines={3}
                multiline
              />

              {error && (
                <Text className="text-red-600 text-xs text-left">
                  {error.message || "error"}
                </Text>
              )}
            </View>
          </>
        )}
      />
    </>
  );
};

export default CustomTextarea;
