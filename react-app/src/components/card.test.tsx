import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card';

test('Читать Больше', () => {
  render(<Card myProps={0} />);
  const linkElement = screen.getByText(/Читать Больше/i);
  expect(linkElement).toBeInTheDocument();
});
