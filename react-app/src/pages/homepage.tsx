import React from 'react';
import Card from '../components/card';
import data, { IData } from '../components/cardlist';
import '../css/card.css';

const pets: JSX.Element[] = data.map((e: IData, i: number) => (
  <div key={i.toString()}>
    <Card myProps={i} />
  </div>
));

function HomePage(): JSX.Element {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="cards">{pets}</div>
    </div>
  );
}

export default HomePage;
