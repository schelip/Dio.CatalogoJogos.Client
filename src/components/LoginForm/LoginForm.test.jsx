import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import LoginForm from './index';

test('should render login button and form', () => {
  render(<LoginForm />);

  const loginButtonEl = screen.getByRole('button');
  expect(loginButtonEl).toBeInTheDocument();

  fireEvent.click(loginButtonEl);
  const emailInputEl = screen.getByLabelText('E-mail:');
  const passwordInputEl = screen.getByLabelText('Senha:');
  const submitButtonEl = screen.getByText('Submeter');
  expect(emailInputEl).toBeInTheDocument();
  expect(passwordInputEl).toBeInTheDocument();
  expect(submitButtonEl).toBeInTheDocument();
});

const url = `${process.env.REACT_APP_API}usuarios/login`;
const response = {
  usuario: {
    nome: 'Nome', fundos: 50.50,
  },
};

const server = setupServer(
  rest.post(url, (req, res, ctx) => res(ctx.json(response))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders username, balance and logout button', async () => {
  const { rerender } = render(<LoginForm />);
  rerender(<LoginForm setUser={(newUser) => rerender(<LoginForm user={newUser} />)} />);

  const loginButtonEl = screen.getByRole('button');
  fireEvent.click(loginButtonEl);

  const emailInputEl = screen.getByLabelText('E-mail:');
  fireEvent.change(emailInputEl, { target: { value: 'user@example.com' } });
  const passwordInputEl = screen.getByLabelText('Senha:');
  fireEvent.change(passwordInputEl, { target: { value: 'string' } });

  const submitButtonEl = screen.getByText('Submeter');
  fireEvent.click(submitButtonEl);

  const usernameEl = await screen.findByText('Nome');
  const balanceEl = await screen.findByText('R$50.50');
  const logoutButtonEl = await screen.findByText('Sair');

  expect(usernameEl).toBeInTheDocument();
  expect(balanceEl).toBeInTheDocument();
  expect(logoutButtonEl).toBeInTheDocument();
});
