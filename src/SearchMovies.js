import React, { useState } from 'react';
import './SearchMovies.css';

const SearchMovies = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div>
      <h1>The Shoppies</h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Movies"
          name="search"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchMovies;
