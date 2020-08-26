import React from 'react';
import MovieItem from './MovieItem';

const Results = ({ movies }) => {
  return (
    <div>
      <section className="movieCards">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie}></MovieItem>
        ))}
      </section>
    </div>
  );
};

export default Results;
