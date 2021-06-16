import React, { useState } from 'react';
import Header from '../Header/Header';
import { Container, Divider } from './Home.styles';
import RecentMovies from '../RecentMovies/RecentMovies';

function Home() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <Container>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Divider />
      <RecentMovies searchInput={searchInput} />
    </Container>
  );
}

export default Home;
