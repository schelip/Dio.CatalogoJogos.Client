import {
  number, string, func, shape,
} from 'prop-types';
import React, { useState } from 'react';
import { authenticate } from '../../services/catalogService';
import * as S from './LoginForm.style';

function LoginForm({ setToken, user, setUser }) {
  const [renderForm, setRenderForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setRenderForm(false);
    const response = await authenticate(email, password);
    if (response && response.usuario) {
      setUser(response.usuario);
      setIsAuthenticated(true);
      setToken(response.token);
    }
  };

  const handleLogout = async () => {
    setUser({});
    setToken('');
    setIsAuthenticated(false);
  };

  return (
    <S.Wrapper>
      {isAuthenticated
        ? (
          <S.AuthenticatedWrapper>
            <S.NameWrapper>
              {'Olá, '}
              <b>{user.nome}</b>
              !
            </S.NameWrapper>
            <S.PriceWrapper>
              {'Saldo atual: '}
              <b>{`R$${user.fundos.toFixed(2)}`}</b>
            </S.PriceWrapper>
            <S.LogoutButton type="button" onClick={handleLogout}>Sair</S.LogoutButton>
          </S.AuthenticatedWrapper>
        )
        : (
          <>
            <S.LoginButton
              className={renderForm ? 'active' : 'inactive'}
              onClick={() => setRenderForm(!renderForm)}
            >
              Login
            </S.LoginButton>
            {renderForm
            && (
              <S.LoginForm>
                <label htmlFor="email">
                  E-mail:
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <br />
                <label htmlFor="password">
                  Senha:
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                <button type="button" onClick={handleLogin}>Submeter</button>
              </S.LoginForm>
            )}
          </>
        )}
    </S.Wrapper>
  );
}

LoginForm.propTypes = {
  setToken: func,
  user: shape({
    nome: string,
    fundos: number,
  }),
  setUser: func,
};

LoginForm.defaultProps = {
  setToken: () => { },
  user: {},
  setUser: () => { },
};

export default LoginForm;
