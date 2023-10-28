import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLayout from "./AppLayout";
import SmallMovieRow from "../components/SmallMovieRow";
import RowHeading from "../components/RowHeading";
import BigMovieRow from "../components/BigMovieRow";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
        const data = await response.json();
        setMovies(data); 
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
          <SmallMovieRow movies={movies}/>
          {/* Popular Ends */}

          {/* Playing In Theatres Starts*/}
          <View className="mt-3">
            <RowHeading title="Playing In Theatres" />
          </View>
          {/* Playing In THeatres Row */}
          <BigMovieRow movies={movies}/>
          {/* Playing In Theatres Ends*/}

          {/* Trending Starts */}
          <View className="mt-3">
          <RowHeading title="Trending"/>
          </View>
          <SmallMovieRow movies={movies}/>
          {/* Trending Ends */}
          {/* Body Ends */}
        </ScrollView>
      </SafeAreaView>
    </AppLayout>
  );
};

export default Movies;
