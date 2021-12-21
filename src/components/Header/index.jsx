import { func, string } from 'prop-types';
import React from 'react';
import LoginForm from '../LoginForm/index';
import * as S from './Header.style';

function Header({ title, setToken }) {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <LoginForm setToken={setToken} />
    </S.Wrapper>
  );
}

Header.propTypes = {
  title: string,
  setToken: func,
};

Header.defaultProps = {
  title: 'Titulo',
  setToken: () => { },
};

export default Header;
