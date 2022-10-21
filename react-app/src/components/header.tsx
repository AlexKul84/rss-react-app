import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';
import '../css/header.css';

function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="container">
        <div className="header__navigation">
          <Link to="/" className="header__menu-item">
            Home
          </Link>
          <Link to="/about" className="header__menu-item">
            About us
          </Link>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Header;
