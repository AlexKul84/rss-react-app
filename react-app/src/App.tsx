import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import Header from 'components/header';
import HomePage from 'pages/homepage';
import About from 'pages/about';
import './App.css';
import './css/header.css';
import './css/normalize.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <ul className="header__navigation">
          <li className="header__menu-item">
            <a href="/">Home</a>
          </li>
          <li className="header__menu-item">
            <a href="/about">About us</a>
          </li>
        </ul>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
