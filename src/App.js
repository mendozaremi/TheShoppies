import React, { useState, useEffect } from 'react';
import './App.css';
import SearchMovies from './SearchMovies';
// import Nominations from './Nominations';
import Results from './Results';
import ApiKey from './ApiKey';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `http://www.omdbapi.com/?s=${query}&apikey=${ApiKey}`
      );
      console.log(result);
      setMovies(result);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <SearchMovies getQuery={(q) => setQuery(q)} />
      {/* <Results movies={movies} /> */}
      {/* <Nominations /> */}
    </div>
  );
};

export default App;
