import React from 'react';
import './App.css';
import SearchMovies from './SearchMovies';
import Nominations from './Nominations';
import Results from './Results';

function App() {
  return (
    <div className="App">
      <SearchMovies />
      <Results />
      <Nominations />
    </div>
  );
}

export default App;
