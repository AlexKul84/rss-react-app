import React from 'react';
import data from './cardlist';
import '../css/card.css';

interface IProps {
  myProps: number;
}

class Card extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <div className="card">
        <img className="card__img" src={data[this.props.myProps].img} alt="" />
        <p className="card__pet-name">{data[this.props.myProps].name}</p>
        <p className="card__breed">{data[this.props.myProps].breed}</p>
        <button className="card__btn">Читать Больше</button>
      </div>
    );
  }
}

export default Card;
