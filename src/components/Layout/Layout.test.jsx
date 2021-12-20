import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './index';

test('renders header', () => {
  render(<Layout />);

  const headerEl = screen.getByRole('banner');

  expect(headerEl).toBeInTheDocument();
});
