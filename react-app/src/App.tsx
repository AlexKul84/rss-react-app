import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/header';
import HomePage from 'pages/homepage';
import About from 'pages/about';
import Forms from 'pages/forms';
import NotFound from 'pages/notFound';
import './App.css';
import './css/header.css';
import './css/normalize.css';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
