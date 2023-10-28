import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieTile = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {}}
      className="self-center bg-transparent mx-3"
    >
      <View className="mx-3 pt-1 self-center" style={{ width: 80, height: 245 }}>
        <View className="py-2 self-center">
          <Image
            source={{
              uri: props.image,
            }}
            className="h-40 w-28 self-center"
          />
        </View>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-white w-24 text-center text-base"
        >
          {props.title}
        </Text>
        <Text className="text-slate-300 text-center  text-xs">
          {props.year}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieTile;