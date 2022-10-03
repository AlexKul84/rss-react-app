import React from 'react';
import '../css/search.css';

function Search() {
  return (
    <div className="search">
      <form action="">
        <input className="search__input" type="text" value={'Поиск'} />
        <input className="search__submit" type="submit" value={'Поиск'} />
      </form>
    </div>
  );
}

export default Search;
