import { node } from 'prop-types';
import React from 'react';
import Header from '../Header';
import * as S from './Layout.style';

function Layout({ children }) {
  return (
    <>
      <Header title="Dio.CatalogoJogos" />
      <S.ContentWrapper>
        {children}
      </S.ContentWrapper>
    </>
  );
}

Layout.propTypes = {
  children: node,
};

Layout.defaultProps = {
  children: (<div />),
};

export default Layout;
