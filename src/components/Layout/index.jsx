import { node } from 'prop-types';
import React from 'react';
import Header from '../Header';

function Layout({ children }) {
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

export default Layout;
