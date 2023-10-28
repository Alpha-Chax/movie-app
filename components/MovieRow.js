import { View, Text, ScrollView } from "react-native";
import React from "react";
import MovieTile from "./MovieTile";

const MovieRow = () => {
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
        className="pt-4"
      >
        <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" 
        title="Lion King"
        description="2019"
        />
         <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" 
        title="Lion King"
        description="2019"
        />
         <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" 
        title="Lion King"
        description="2019"
        />
         <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" 
        title="Lion King"
        description="2019"
        />
         <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" 
        title="Lion King"
        description="2019"
        />
      </ScrollView>
    </View>
  );
};

export default MovieRow;
