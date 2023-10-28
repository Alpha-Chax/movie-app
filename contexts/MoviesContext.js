import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataFromStorage = async () => {
      try {
        const data = await AsyncStorage.getItem('moviesData');
        if (data) {
          setMovies(JSON.parse(data));
        }
      } catch (error) {
        console.error('Error fetching data from local storage:', error);
      }
    };

    fetchDataFromStorage();
  }, []);

  return (
    <MoviesContext.Provider value={movies}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider, MoviesContext };
