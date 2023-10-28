import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MovieCard = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      className="self-center bg-transparent px-2"
    >
      <View className="self-center">
        <Image
          source={{
            uri: props.image,
          }}
          resizeMode='stretch'  
          className="h-36 w-56 self-center"
        />
      </View> 
      <Text numberOfLines={2} className="text-white pr-2 text-center text-base">{props.title}</Text>
      <View className="flex-row justify-start pl-3 items-center">
        <Text className="text-slate-300 pt-1 text-center text-xs">{props.year}</Text>
        <Text className="text-slate-300 pt-1 text-center mx-2 text-xs">|</Text>
      <Text className="text-slate-300 pt-1 text-center text-xs">{props.duration}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MovieCard