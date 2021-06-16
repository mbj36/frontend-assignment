import React from 'react';
import { Heading, Movies } from './RecentMovies.styles';
import { useRecentMovies } from './useRecentMovies';
import MovieCard from '../MovieCard/MovieCard';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

function RecentMovies() {
  const {
    movies,
    loading,
    isOpen,
    setIsOpen,
    selectedMovie,
    setSelectedMovie,
  } = useRecentMovies();

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
            return (
              <MovieCard
                key={index}
                movie={movie}
                setIsOpen={setIsOpen}
                setSelectedMovie={setSelectedMovie}
              />
            );
          })}
      </Movies>

      <Modal
        isOpen={isOpen}
        movie={selectedMovie}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default RecentMovies;
