import React from 'react';
import { render, screen } from '@testing-library/react';
import YearFilter from './index';

const years = [1990, 1991, 1992, 1993, 1993, 1994, 1996];

test('should render year ranges', () => {
  render(<YearFilter years={years} />);

  const range1El = screen.getByText(/1990 - 1994/i);
  const range2El = screen.getByText(/1996/i);

  expect(range1El).toBeInTheDocument();
  expect(range2El).toBeInTheDocument();
});
