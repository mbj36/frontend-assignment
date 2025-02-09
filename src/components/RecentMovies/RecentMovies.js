import React from 'react';
import { Heading, Movies, LoaderStyles } from './RecentMovies.styles';
import { useRecentMovies } from './useRecentMovies';
import MovieCard from '../MovieCard/MovieCard';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

function RecentMovies({ searchInput }) {
  const {
    movies,
    loading,
    isOpen,
    setIsOpen,
    selectedMovie,
    setSelectedMovie,
  } = useRecentMovies(searchInput);

  if (loading) {
    return (
      <LoaderStyles>
        <Loader />
      </LoaderStyles>
    );
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
