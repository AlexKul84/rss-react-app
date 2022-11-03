import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './notFound';

test('Ошибка 404', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/Ошибка 404/i);
  expect(linkElement).toBeInTheDocument();
});

test('Страница не найдена', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/Страница не найдена/i);
  expect(linkElement).toBeInTheDocument();
});
