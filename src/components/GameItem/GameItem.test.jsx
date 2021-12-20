import { render, screen } from '@testing-library/react';
import React from 'react';
import GameItem from './index';

const name = 'test name';
const producerNames = ['test producer', 'test parent producer'];
const year = 1970;
const price = 0;

test('should render thumbnail image, game name, game producer, year and price', async () => {
  render(<GameItem name={name} producerNames={producerNames} year={year} price={price} />);

  const imgEl = screen.getByRole('img');
  const nameEl = screen.getByText(/test name/i);
  const producerEl = screen.getByText(/test producer/i);
  const parentProducerEl = screen.getByText(/test parent producer/i);
  const yearEl = screen.getByText(/1970/i);
  const priceEl = screen.getByText(/R\$0.00/i);

  expect(imgEl).toBeInTheDocument();
  expect(nameEl).toBeInTheDocument();
  expect(producerEl).toBeInTheDocument();
  expect(parentProducerEl).toBeInTheDocument();
  expect(yearEl).toBeInTheDocument();
  expect(priceEl).toBeInTheDocument();
});
