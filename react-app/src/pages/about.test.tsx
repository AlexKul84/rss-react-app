import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './about';

test('This is page about us', () => {
  render(<About />);
  const linkElement = screen.getByText(/This is page about us/i);
  expect(linkElement).toBeInTheDocument();
});
