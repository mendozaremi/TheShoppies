import React from 'react';
import './SearchMovies.css';

function SearchMovies() {
  return (
    <div>
      <h1>The Shoppies</h1>
      <div className="searchBar">
        <input type="text" placeholder="Search Movies" name="search" />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchMovies;
