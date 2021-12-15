import { node } from 'prop-types';
import React from 'react';
import { Header } from '../Header';

export function Layout({ children }) {
  return (
    <>
      <Header title="Dio.CatalogoJogos" />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: node,
};

Layout.defaultProps = {
  children: (<div />),
};
