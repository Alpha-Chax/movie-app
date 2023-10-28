import { View, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Loader from './Loader';
import { MoviesContext } from '../contexts/MoviesContext';

const BigMovieRow = () => {
  const { movies, loading } = useContext(MoviesContext);

  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
          flexGrow: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        className="pt-4"
      >
        {loading ? (
          <View style={{ flexDirection: 'row' }}>
            <Loader />
          </View>
        ) : (
          movies &&
          movies.map((movie) => (
            <MovieCard
              key={`${movie.Title}-${movie.Year}`}
              image={
                movie.Poster ??
                'https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_.jpg'
              }
              title={movie.Title ?? '-'}
              year={movie.Year ?? '-'}
              duration={movie.Runtime ?? '-'}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default BigMovieRow;
