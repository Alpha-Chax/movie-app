import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieTile = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {}}
      className="self-center bg-transparent"
    >
      <View className="py-3 self-center">
        <Image
          source={{
            uri: props.image,
          }}
          className="h-28 w-32 self-center"
        />
      </View>
      <Text className="text-white pl-1">{props.title}</Text>
      <Text className="text-white">{props.description}</Text>
    </TouchableOpacity>
  );
};

export default MovieTile;
