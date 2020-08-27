import React from 'react';
import MovieItem from './MovieItem';

const Results = ({ movies }) => {
  return (
    <div>
      <div className="movieCards">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie}></MovieItem>
        ))}
      </div>
    </div>
  );
};

export default Results;
