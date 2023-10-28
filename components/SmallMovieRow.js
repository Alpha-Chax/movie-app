import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import MovieTile from "./MovieTile";
import Loader from "./Loader";

const SmallMovieRow = ({ movies }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setLoading(false);
    }
  }, [movies]);

 
  return (
    <View className="pr-3">
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
          flexGrow: 1,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {loading ? (
          <View style={{ flexDirection: "row" }}>
            <Loader/>
          </View>
        ) : (
          movies &&
          movies.map((movie) => (
            <MovieTile
              key={`${movie.Title}-${movie.Year}`}
              image={
                movie.Poster ??
                "https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_.jpg"
              }
              title={movie.Title ?? "-"}
              year={movie.Year ?? "-"}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default SmallMovieRow;
