import React, { ReactNode } from 'react';
import Card from '../components/card';
import data from '../components/cardlist';
import '../css/card.css';

const pets = data.map((e, i) => (
  <div key={i.toString()}>
    <Card myProps={i} />
  </div>
));

function HomePage() {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="cards">{pets}</div>
    </div>
  );
}

export default HomePage;
