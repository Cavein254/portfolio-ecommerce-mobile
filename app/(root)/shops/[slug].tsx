import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Shop = () => {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>Shop {slug} </Text>
    </View>
  );
};

export default Shop;
