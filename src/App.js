import React, { useState } from 'react';
import SearchMovies from './SearchMovies';
// import Nominations from './Nominations';
import Results from './Results';
import ApiKey from './ApiKey';
import axios from 'axios';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const fetchItems = async () => {
    const response = await axios(
      `http://www.omdbapi.com/?s=${query}&apikey=${ApiKey}`
    );

    console.log(response.data);
    setMovies(response.data.Search);
  };

  const onChange = (q) => {
    setQuery(q);
  };

  return (
    <div className="App">
      <h1>The Shoppies</h1>

      {/* fetch data from API */}

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Movies"
          name="search"
          value={query}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit" onClick={fetchItems}>
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/* display data from API */}
      {/* <SearchMovies getQuery={(q) => setQuery(q)} /> */}
      <Results movies={movies} />
      {/* <Nominations /> */}
    </div>
  );
};

export default App;
