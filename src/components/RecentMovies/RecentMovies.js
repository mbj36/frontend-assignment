import React from 'react';
import { Heading, Movies } from './RecentMovies.styles';
import { useRecentMovies } from './useRecentMovies';
import MovieCard from '../MovieCard/MovieCard';
import Loader from '../Loader/Loader';

function RecentMovies() {
  const { movies, loading } = useRecentMovies();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Heading>Most Recent Movies</Heading>

      <Movies>
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
      </Movies>
    </>
  );
}

export default RecentMovies;
