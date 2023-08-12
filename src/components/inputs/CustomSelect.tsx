import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Controller, Control, FieldErrors } from "react-hook-form";

interface CustomInputProps {
  rules?: Record<string, any>;
  control: Control;
  name: string;
  label: string;
  placeholder: string;
}

// import { Controller, Control, FieldErrors } from "react-hook-form";
// const countries = ["Egypt", "Canada", "Australia", "Ireland"];
// const data = [
//   { label: "Item 1", value: "1" },
//   { label: "Item 2", value: "2" },
//   { label: "Item 3", value: "3" },
//   { label: "Item 4", value: "4" },
//   { label: "Item 5", value: "5" },
//   { label: "Item 6", value: "6" },
//   { label: "Item 7", value: "7" },
//   { label: "Item 8", value: "8" },
// ];
const data = [
  { key: "1", value: "Mobiles", disabled: true },
  { key: "2", value: "Appliances" },
  { key: "3", value: "Cameras" },
  { key: "5", value: "Vegetables" },
  { key: "6", value: "Diary Products" },
  { key: "7", value: "Drinks" },
];
const CustomSelect: React.FC<CustomInputProps> = ({
  rules = {},
  control,
  name,
  placeholder,
  label,
}) => {
  const { width } = Dimensions.get("window");
  const [selected, setSelected] = useState("");
  const [valueInput, setValueInput] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);
  console.warn(valueInput);

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
          <View className="space-y-1" style={{ width: width * 0.94 }}>
            <Text className="text-lg font-bold"></Text>
            <Dropdown
              style={{
                width: width * 0.94,
                backgroundColor: "#eee",
                paddingHorizontal: 24,
                borderRadius: 6,
                paddingVertical: 7,
              }}
              // placeholderStyle={}
              selectedTextStyle={{ backgroundColor: "red" }}
              // inputSearchStyle={}
              // key={(item)=> item.}
              // onChangeText={value}
              // onChange={(item) => console.warn(item.value)}
              data={data}
              // search
              maxHeight={300}
              labelField="value"
              valueField="value"
              placeholder={!isFocus ? "Select item" : placeholder}
              // searchPlaceholder="Search..."
              value={valueInput}
              // onFocus={onBlur}
              onBlur={onBlur}
              onChange={(item) => {
                setValueInput(item.value);
                setIsFocus(false);
              }}
            />
          </View>
        )}
      />
    </>
  );
};

export default CustomSelect;

// import { View, Text, TextInput, Dimensions } from "react-native";
// import React from "react";

// import { Controller, Control, FieldErrors } from "react-hook-form";

// interface CustomInputProps {
//   rules?: Record<string, any>;
//   control: Control;
//   name: string;
//   label: string;
//   placeholder: string;
//   secureTextEntry?: boolean;
// }

// const { width } = Dimensions.get("window");
// const CustomTextarea: React.FC<CustomInputProps> = ({
//   rules = {},
//   control,
//   name,
//   placeholder,
//   label,
// }) => {
//   return (
//     <>
//       <Controller
//         control={control}
//         name={name}
//         rules={rules}
//         render={({
//           field: { value, onBlur, onChange },
//           fieldState: { error },
//         }) => (
//           <>
//             <View className="mb-4">
//               <View className="space-y-1" style={{ width: width * 0.94 }}>
//                 <Text className="text-lg font-bold">{label}</Text>
//                 <TextInput
//                   onChangeText={onChange}
//                   value={value}
//                   onBlur={onBlur}
//                   placeholder={placeholder}
//                   className={`bg-gray-100 py-2.5 rounded-lg items-center justify-center border  text-lg px-6 ${
//                     error ? "border-red-600" : "border-gray-100"
//                   }`}
//                   numberOfLines={4}
//                   multiline
//                 />

//                 {error && (
//                   <Text className="text-red-600 text-xs text-left">
//                     {error.message || "error"}
//                   </Text>
//                 )}
//               </View>
//             </View>
//           </>
//         )}
//       />
//     </>
//   );
// };

// export default CustomTextarea;
