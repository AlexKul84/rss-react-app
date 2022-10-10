import React from 'react';
import data from './cardlist';
import '../css/card.css';

function Card(props: { myProps: number }) {
  return (
    <div className="card">
      <img className="card__img" src={data[props.myProps].img} alt="" />
      <p className="card__pet-name">{data[props.myProps].name}</p>
      <p className="card__breed">{data[props.myProps].breed}</p>
      <button className="card__btn">Читать Больше</button>
    </div>
  );
}

export default Card;
