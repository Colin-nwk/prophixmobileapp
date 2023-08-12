import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Controller, Control, FieldErrors } from "react-hook-form";

interface SelectInputProps {
  rules?: Record<string, any>;
  control: Control;
  name: string;
  label: string;
  placeholder: string;
}

const SelectedInput: React.FC<SelectInputProps> = ({
  rules = {},
  control,
  name,
  placeholder,
  label,
}) => {
  const [open, setOpen] = useState(false);
  const { width } = Dimensions.get("window");
  //   const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Plumbing", value: "plumbing" },
    { label: "Electricity", value: "electricity" },
    { label: "Mechanic", value: "mechanic" },
  ]);

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
              <DropDownPicker
                //     multiple={true}
                onChangeValue={onChange}
                onSelectItem={onBlur}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={onChange}
                // setItems={setItems}

                placeholderStyle={{ fontSize: 18, color: "#aaa" }}
                placeholder={placeholder}
                searchable={true}
                searchPlaceholder={placeholder}
                style={{
                  borderColor: error ? "rgb(220 38 38)" : "rgb(243 244 246)",
                  backgroundColor: "rgb(243 244 246)",
                  width: width * 0.94,
                  borderRadius: 6,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
                closeAfterSelecting={true}
                dropDownDirection="AUTO"
                dropDownContainerStyle={{
                  backgroundColor: "#eee",
                  borderColor: "transparent",
                  width: width * 0.94,
                }}
                labelStyle={{ fontSize: 18, color: "#aaa" }}
                searchContainerStyle={{
                  borderColor: "#aaa",
                }}
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

export default SelectedInput;
