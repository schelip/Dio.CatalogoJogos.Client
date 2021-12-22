import {
  number, func, shape, string,
} from 'prop-types';
import React from 'react';
import LoginForm from '../LoginForm/index';
import * as S from './Header.style';

function Header({
  title, setToken, user, setUser,
}) {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <LoginForm setToken={setToken} user={user} setUser={setUser} />
    </S.Wrapper>
  );
}

Header.propTypes = {
  title: string,
  setToken: func,
  user: shape({
    id: string,
    email: string,
    fundos: number,
    nome: string,
  }),
  setUser: func,
};

Header.defaultProps = {
  title: 'Titulo',
  setToken: () => { },
  user: {},
  setUser: () => { },
};

export default Header;
