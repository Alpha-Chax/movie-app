import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLayout from "./AppLayout";
import { ChevronRightIcon } from "react-native-heroicons/outline";

const Movies = () => {
  return (
    //App Layout
    <AppLayout>
      
      <SafeAreaView>
        {/* Header  Starts*/}
        <View className="h-16 bg-slate-800 px-4 pt-4">
          <Text className="text-white text-xl">Movies</Text>
        </View>
        {/* Header Ends*/}
        {/* Body Starts */}
        <View className="flex-row justify-between items-center mx-4 mt-3">
          <Text className="text-white text-lg">Popular</Text>
          <TouchableOpacity onPress={()=>{}}>
          <View className="flex-row items-center">
          <Text className="text-gray-300 text-xs">See all</Text>
          <ChevronRightIcon className="pt-2" color="#D3D3D3" size={16}/>
          </View>
          </TouchableOpacity>
        </View>
        {/* Body Ends */}
      </SafeAreaView>
    </AppLayout>
  );
};

export default Movies;
