import React from 'react';
import { render, screen } from '@testing-library/react';
import GameList from './index';

test('should render year, producer and price filters', () => {
  render(<GameList />);

  const filterTitleEl = screen.getByText(/Filtrar por/i);
  const yearFilterEl = screen.getByText(/Ano de lançamento/i);
  const producerFilterEl = screen.getByText(/Produtora/i);
  const priceFilterEl = screen.getByText(/Preço/i);

  expect(filterTitleEl).toBeInTheDocument();
  expect(yearFilterEl).toBeInTheDocument();
  expect(producerFilterEl).toBeInTheDocument();
  expect(priceFilterEl).toBeInTheDocument();
});
