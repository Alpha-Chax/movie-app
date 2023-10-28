import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View>
      <ActivityIndicator  size="large" color="#008000"/>
    </View>
  )
}

export default Loader