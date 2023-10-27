import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLayout from "./AppLayout";

const Movies = () => {
  return (
    <AppLayout>
      <SafeAreaView className="flex-1 w- self-center">
        <Text>Movies</Text>
      </SafeAreaView>
    </AppLayout>
  );
};

export default Movies;
