import React from 'react';
import { render, screen } from '@testing-library/react';
import PriceFilter from './index';

const prices = [29.99, 49.99, 25.00, 19.99];

test('should render year ranges', () => {
  render(<PriceFilter prices={prices} />);

  const range1El = screen.getByText(/R\$10.00 - R\$19.99/i);
  const range2El = screen.getByText(/R\$20.00 - R\$29.99/i);
  const range3El = screen.getByText(/R\$30.00 - R\$39.99/i);
  const range4El = screen.getByText(/R\$40.00 - R\$50.00/i);

  expect(range1El).toBeInTheDocument();
  expect(range2El).toBeInTheDocument();
  expect(range3El).toBeInTheDocument();
  expect(range4El).toBeInTheDocument();
});
