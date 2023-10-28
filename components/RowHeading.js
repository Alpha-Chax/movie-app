import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/outline'

const RowHeading = (props) => {
  return (
    <View className="flex-row justify-between items-center mx-4 mt-3">
          <Text className="text-white font-semibold text-lg">{props.title}</Text>
          <TouchableOpacity onPress={props.onPress}>
            <View className="flex-row items-center">
              <Text className="text-gray-300 text-xs">See all</Text>
              <ChevronRightIcon className="pt-2" color="#D3D3D3" size={16} />
            </View>
          </TouchableOpacity>
        </View>
  )
}

export default RowHeading