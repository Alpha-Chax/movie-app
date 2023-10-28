import { View, Text, ScrollView } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";

const BigMovieRow = () => {
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
        className="pt-4"
      >
        <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
          title="Mowgli: Legend of the Jungle"
          duration="104 min"
          year="2018"
        />
         <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
          title="Mowgli: Legend of the Jungle"
          duration="104 min"
          year="2018"
        />
         <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
          title="Mowgli: Legend of the Jungle"
          duration="104 min"
          year="2018"
        />
         <MovieCard
          image="https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
          title="Mowgli: Legend of the Jungle"
          duration="104 min"
          year="2018"
        />
      </ScrollView>
    </View>
  );
};

export default BigMovieRow;
