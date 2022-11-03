import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from './homepage';

test('Home', () => {
  render(<Homepage />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
