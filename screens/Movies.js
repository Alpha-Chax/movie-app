import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLayout from "./AppLayout";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import SmallMovieRow from "../components/SmallMovieRow";
import RowHeading from "../components/RowHeading";
import BigMovieRow from "../components/BigMovieRow";

const Movies = () => {
  return (
    //App Layout
    <AppLayout>
      <SafeAreaView>
        <ScrollView className="mb-20">
          {/* Header  Starts*/}
          <View className="h-16 bg-slate-800 px-4 pt-4">
            <Text className="text-white text-xl">Movies</Text>
          </View>
          {/* Header Ends*/}
          {/* Body Starts */}

          {/* Popular Starts*/}
          <RowHeading title="Popular" />
          {/* Popular Movies Row*/}
          <SmallMovieRow />
          {/* Popular Ends */}

          {/* Playing In Theatres Starts*/}
          <View className="mt-3">
            <RowHeading title="Playing In Theatres" />
          </View>
          {/* Playing In THeatres Row */}
          <BigMovieRow />
          {/* Playing In Theatres Ends*/}

          {/* Trending Starts */}
          <View className="mt-3">
          <RowHeading title="Trending"/>
          </View>
          <SmallMovieRow />
          {/* Trending Ends */}
          {/* Body Ends */}
        </ScrollView>
      </SafeAreaView>
    </AppLayout>
  );
};

export default Movies;
