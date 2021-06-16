import React from 'react';
import { Card, Image, Text, Rating } from './MovieCard.styles';

function MovieCard({ movie, setSelectedMovie, setIsOpen }) {
  return (
    <Card
      onClick={() => {
        setIsOpen(true);
        setSelectedMovie(movie);
      }}
    >
      <Rating>{movie.vote_average}</Rating>
      <Image
        src={`https://themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        alt={movie.title}
      />

      <Text>{movie.title}</Text>
    </Card>
  );
}

export default MovieCard;
