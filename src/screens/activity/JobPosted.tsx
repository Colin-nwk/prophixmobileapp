import { View, Text } from "react-native";
import React, { useState } from "react";
import { Tab, TabView } from "@rneui/themed";

const JobPosted = () => {
  const [index, setIndex] = useState(0);
  return (
    <View className="flex-1 bg-white ">
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "black",
          height: 3,
        }}
        variant="default"
        dense
      >
        <Tab.Item title="Open" titleStyle={{ fontSize: 18 }} />
        <Tab.Item title="Archived" titleStyle={{ fontSize: 18 }} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <Text>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <Text>Favorite</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default JobPosted;
