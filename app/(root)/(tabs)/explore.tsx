import { View, Text, FlatList } from "react-native";
import React from "react";

const Explore = () => {
  return (
    <View>
      <Text>Explore</Text>

      <FlatList
        className="bg-red-600 "
        data={["1", "2", "3", "4"]}
        renderItem={({ item }) => <Text>{item}</Text>}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Explore;
