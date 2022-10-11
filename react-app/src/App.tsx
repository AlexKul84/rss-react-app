import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/header';
import HomePage from 'pages/homepage';
import About from 'pages/about';
import NotFound from 'pages/notFound';
import './App.css';
import './css/header.css';
import './css/normalize.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
