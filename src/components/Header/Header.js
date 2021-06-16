import React from 'react';
import logo from '../../images/logo.svg';
import { Navbar, Input } from './Header.styles';

function Header({ searchInput, setSearchInput }) {
  return (
    <Navbar>
      <img src={logo} alt="timescale-logo" />

      <Input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder=" Search for a movie"
      ></Input>
    </Navbar>
  );
}

export default Header;
