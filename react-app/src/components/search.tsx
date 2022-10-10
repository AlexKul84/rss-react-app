import React, { ChangeEvent, Component } from 'react';
import '../css/search.css';

export default class Search extends Component {
  state = {
    search: '',
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { search } = this.state;
    localStorage.setItem('search', search ? search : '');
  };

  componentDidMount() {
    const search = localStorage.getItem('search');
    this.setState({ search });
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleFormSubmit}>
          <input
            name="search"
            className="search__input"
            placeholder="Поиск"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button className="search__submit" type="submit">
            Поиск
          </button>
        </form>
      </div>
    );
  }
}
