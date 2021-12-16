import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render header', () => {
  render(<App />);

  const headerEl = screen.getByRole('banner');

  expect(headerEl).toBeInTheDocument();
});
