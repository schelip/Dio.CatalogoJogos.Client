import { string } from 'prop-types';
import React from 'react';
import Wrapper from './Header.style';

export function Header({ title }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
}

Header.propTypes = {
  title: string,
};

Header.defaultProps = {
  title: 'Titulo',
};
