import React from 'react';
import MovieItem from './MovieItem';

const Results = ({ movies }) => {
  return (
    <section className="movieCards">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie}></MovieItem>
      ))}
    </section>
  );
};

export default Results;
