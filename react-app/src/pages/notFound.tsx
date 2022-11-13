import React from 'react';
import '../css/header.css';

class NotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="container">
        <p>Ошибка 404</p>
        <p>Страница не найдена</p>
      </div>
    );
  }
}

export default NotFound;
