import { render, screen } from '@testing-library/react';

test('renders header', () => {
  render(<Layout />);

  const headerEl = screen.getByRole('header');

  expect(headerEl).toBeInTheDocument();
});
