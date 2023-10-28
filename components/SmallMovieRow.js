import { View, Text, ScrollView } from "react-native";
import React from "react";
import MovieTile from "./MovieTile";

const SmallMovieRow = () => {
  return (
    <View >
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
          flexGrow: 1,
          justifyContent: 'center', 
          alignSelf: "center"
        }}  
      >
        <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" 
        title="Lion King"
        year="2019"
        />
         <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg" 
        title="Mowgli: Legend of the Jungle"
        year="2018"
        />
         <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" 
        title="Lion King"
        year="2019"
        />
         <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" 
        title="Lion King"
        year="2019"
        />
         <MovieTile image="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" 
        title="Lion King"
        year="2019"
        />
      </ScrollView>
    </View>
  );
};

export default SmallMovieRow;
