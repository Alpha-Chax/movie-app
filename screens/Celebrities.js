import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLayout from "./AppLayout";

const Celebrities = () => {
  return (
    <AppLayout>
      <SafeAreaView className="flex-1 self-center">
        <Text className="text-white">Celebrities</Text>
      </SafeAreaView>
    </AppLayout>
  );
};

export default Celebrities;
