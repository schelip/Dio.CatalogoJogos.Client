import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and div', () => {
  render(<App />);

  const headerEl = screen.getByRole(<header />);
  const divEl = screen.getByRole(<div />);

  expect(headerEl).toBeInTheDocument();
  expect(divEl).toBeInTheDocument();
});
