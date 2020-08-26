import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="card">
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieItem;
