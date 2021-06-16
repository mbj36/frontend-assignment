import React from 'react';
import Header from '../Header/Header';
import { Container, Divider } from './Home.styles';
import RecentMovies from '../RecentMovies/RecentMovies';

function Home() {
  return (
    <Container>
      <Header />
      <Divider />
      <RecentMovies />
    </Container>
  );
}

export default Home;
