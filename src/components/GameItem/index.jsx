import React from 'react';
import { number, string } from 'prop-types';
import * as S from './GameItem.style';

function GameItem({
  name,
  producer,
  year,
  price,
  imgURL,
}) {
  return (
    <S.Wrapper>
      <img src={imgURL} alt={`Thumbnail for ${name}`} />
      <S.SubWrapper>
        <S.WrapperInfo>
          <h2>{name}</h2>
          <h4>{producer}</h4>
          <p>{year}</p>
        </S.WrapperInfo>
        <S.Price>{`R$${price.toFixed(2)}`}</S.Price>
        <S.Button>Comprar</S.Button>
      </S.SubWrapper>
    </S.Wrapper>
  );
}

GameItem.propTypes = {
  name: string,
  producer: string,
  year: number,
  price: number,
  imgURL: string,
};

GameItem.defaultProps = {
  name: 'Game Name',
  producer: 'Producer Name',
  year: 2020,
  price: 0,
  imgURL: 'https://via.placeholder.com/140x220',
};

export default GameItem;
