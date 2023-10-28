import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieTile = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {}}
      className="self-center bg-transparent mx-2"
    >
      <View className="py-2 self-center">
        <Image
          source={{
            uri: props.image,
          }}
          className="h-40 w-28 self-center"
        />
      </View>
      <Text className="text-white text-center text-base">{props.title}</Text>
      <Text className="text-slate-300 text-center  text-xs">{props.description}</Text>
    </TouchableOpacity>
  );
};

export default MovieTile;
