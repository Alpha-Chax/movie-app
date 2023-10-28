import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLayout from "./AppLayout";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import MovieRow from "../components/MovieRow";
import RowHeading from "../components/RowHeading";

const Movies = () => {
  return (
    //App Layout
    <AppLayout>
      <SafeAreaView>
        <ScrollView>
          {/* Header  Starts*/}
          <View className="h-16 bg-slate-800 px-4 pt-4">
            <Text className="text-white text-xl">Movies</Text>
          </View>
          {/* Header Ends*/}
          {/* Body Starts */}

          {/* Popular Starts*/}
          <RowHeading title="Popular" />
          {/* Popular Movies Row*/}
          <MovieRow />
          {/* Popular Ends */}

          {/* Playing In Theatres Starts*/}
          <View className="mt-3">
            <RowHeading title="Playing In Theatres" />
          </View>

          {/* Playing In Theatres Ends*/}
          {/* Body Ends */}
        </ScrollView>
      </SafeAreaView>
    </AppLayout>
  );
};

export default Movies;
