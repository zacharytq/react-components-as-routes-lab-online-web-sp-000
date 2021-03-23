import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <br/>
        { movies.map((movie, index) => (
          <div key={index}>
            <h3>Name: { movie.title }</h3>
            <p>Running Time: { movie.time }</p>
            <ul>
              { movie.genres.map((genre, index) => <li key={index}>{genre}</li>) }
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
