import React, { useState, useEffect } from 'react';
import SearchMovies from './SearchMovies';
// import Nominations from './Nominations';
// import Results from './Results';
import ApiKey from './ApiKey';
import axios from 'axios';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=${ApiKey}`
      );

      console.log(`this is response ${response.data.Search}`);
      setMovies(response.data.Search);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <SearchMovies getQuery={(q) => setQuery(q)} />
      {/* <Results items={items} /> */}
      {/* <Nominations /> */}
    </div>
  );
};

export default App;
