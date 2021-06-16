import React from 'react';
import logo from '../../images/logo.svg';
import { Navbar, Input } from './Header.styles';

function Header() {
  return (
    <Navbar>
      <img src={logo} alt="timescale-logo" />

      <Input placeholder=" Search for a movie"></Input>
    </Navbar>
  );
}

export default Header;
