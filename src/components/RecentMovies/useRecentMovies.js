import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRecentMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getRecentMovies();
  }, []);

  const getRecentMovies = async () => {
    setLoading(true);
    let res;

    try {
      res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`
      );
      let { results } = res.data;

      setMovies(results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return {
    movies,
    loading,
    isOpen,
    setIsOpen,
    selectedMovie,
    setSelectedMovie,
  };
};
