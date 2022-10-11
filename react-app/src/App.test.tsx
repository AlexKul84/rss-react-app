import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import HomePage from './pages/homepage';

test('Home', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
