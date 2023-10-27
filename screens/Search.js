import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLayout from "./AppLayout";

const Search = () => {
  return (
    <AppLayout>
      <SafeAreaView className="flex-1 self-center">
        <Text className="text-white">Search</Text>
      </SafeAreaView>
    </AppLayout>
  );
};

export default Search;
