import React from 'react';
import '../css/header.css';

function Header() {
  return (
    <div className="header">
      <ul className="header__navigation">
        <li className="header__menu-item">Home</li>
        <li className="header__menu-item">About us</li>
      </ul>
    </div>
  );
}

export default Header;
