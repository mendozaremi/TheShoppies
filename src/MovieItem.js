import React from 'react';

const MovieItem = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.title}</h3>
    </div>
  );
};

export default MovieItem;
