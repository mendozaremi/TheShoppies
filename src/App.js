import React, { useState, useEffect } from 'react';
import './App.css';
import SearchMovies from './SearchMovies';
import Nominations from './Nominations';
import Results from './Results';
import ApiKey from './ApiKey';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `http://www.omdbapi.com/?s=${title}&apikey=${ApiKey}`
      );
      setMovies(result);
    };

    fetchItems();
  }, [title]);

  return (
    <div className="App">
      <SearchMovies getTitle-={(t) => setTitle(t)} />
      <Results movies={movies} />
      <Nominations />
    </div>
  );
};

export default App;
