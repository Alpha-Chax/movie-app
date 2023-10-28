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
          style={{
            height: 140, 
            width: 240, 
            aspectRatio: 1.6, 
          }}
          resizeMode='stretch'  
          className="self-center"
        />
      
      <Text numberOfLines={2} className="text-white ml-1 text-base">{props.title}</Text>
      <View className="flex-row justify-start  ml-1 items-center">
        <Text className="text-slate-300 pt-1 text-center text-xs">{props.year}</Text>
        <Text className="text-slate-300 pt-1 text-center mx-2 text-xs">|</Text>
      <Text className="text-slate-300 pt-1 text-center text-xs">{props.duration}</Text>
      </View> 
      </View>
    </TouchableOpacity>
  )
}

export default MovieCard