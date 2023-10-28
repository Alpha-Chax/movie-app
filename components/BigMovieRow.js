import { View, ScrollView } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";

const BigMovieRow = ({movies}) => {
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
        className="pt-4"
      >
         {movies && movies.map((movie) => (
        <MovieCard
        key={`${movie.Title}-${movie.Year}`}
        image={movie.Poster ?? "https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_.jpg"}
        title={movie.Title}
        year={movie.Year}
        duration={movie.Runtime}
        />
         ))}
      </ScrollView>
    </View>
  );
};

export default BigMovieRow;
