import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';
import '../css/header.css';

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <div className="header">
        <div className="container">
          <div data-testid="navbar" className="header__navigation">
            <Link data-testid="home-page" to="/" className="header__menu-item">
              Home
            </Link>
            <Link data-testid="about-page" to="/about" className="header__menu-item">
              About us
            </Link>
            <Link data-testid="forms-page" to="/forms" className="header__menu-item">
              Forms
            </Link>
          </div>
          <Search />
        </div>
      </div>
    );
  }
}

export default Header;
