import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import GameItem from './index';
import { getProducer } from '../../services/catalogService';

const name = 'test name';
const producerId = '464d9546-a9b1-47db-9327-1935d1246e0e';
const year = 1970;
const price = 0;

const url = `${process.env.REACT_APP_API}produtoras/${producerId}`;
const response = { nome: 'test producer' };

const server = setupServer(
  rest.get(url, (req, res, ctx) => res(ctx.json(response))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should render thumbnail image, game name, game producer, year and price', async () => {
  render(<GameItem name={name} producerId={producerId} year={year} price={price} />);
  await act(async () => getProducer(producerId));

  const imgEl = screen.getByRole('img');
  const nameEl = screen.getByText(/test name/i);
  const producerEl = screen.getByText(/test producer/i);
  const yearEl = screen.getByText(/1970/i);
  const priceEl = screen.getByText(/R\$0.00/i);

  expect(imgEl).toBeInTheDocument();
  expect(nameEl).toBeInTheDocument();
  expect(producerEl).toBeInTheDocument();
  expect(yearEl).toBeInTheDocument();
  expect(priceEl).toBeInTheDocument();
});
