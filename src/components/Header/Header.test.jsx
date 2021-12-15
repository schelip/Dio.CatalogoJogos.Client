import React from 'react';
import { render, screen } from '@testing-library/react';

const title = 'test title';

test('should render title', () => {
  render(<Header title={title} />);

  const titleEl = screen.getByText(/test title/i);

  expect(titleEl).toBeInTheDocument();
});
