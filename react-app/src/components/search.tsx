import React, { ChangeEvent, Component } from 'react';
import '../css/search.css';

interface IState {
  search: string;
}

export default class Search extends Component {
  state: IState = {
    search: '',
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const input: EventTarget & HTMLInputElement = event.target;
    const value: string = input.value;
    this.setState({ search: value });
    localStorage.setItem('search', 'search' ? value : '');
  };

  private handleFormSubmit = (): void => {
    const value: string = this.state.search;
    localStorage.setItem('search', 'search' ? value : '');
  };

  componentDidMount(): void {
    const value: string | null = localStorage.getItem('search');
    this.setState({ search: value });
  }

  render(): JSX.Element {
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
