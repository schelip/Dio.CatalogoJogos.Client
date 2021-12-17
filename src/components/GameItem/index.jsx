import React, { useEffect, useState } from 'react';
import { number, string } from 'prop-types';
import * as S from './GameItem.style';
import { getProducer } from '../../services/catalogService';

function GameItem({
  name,
  producerId,
  year,
  price,
  imgURL,
}) {
  const [producer, setProducer] = useState('');

  useEffect(() => {
    const fetchProducer = async () => {
      setProducer(await getProducer(producerId));
    };
    fetchProducer();
  }, []);

  return (
    <S.Wrapper>
      <img src={imgURL} alt={`Thumbnail for ${name}`} />
      <S.SubWrapper>
        <S.WrapperInfo>
          <h2>{name}</h2>
          <h4>{producer.nome}</h4>
          <p>{year}</p>
        </S.WrapperInfo>
        <S.WrapperPrice>
          <h2>{`R$${price.toFixed(2)}`}</h2>
          <button type="button">Comprar</button>
        </S.WrapperPrice>
      </S.SubWrapper>
    </S.Wrapper>
  );
}

GameItem.propTypes = {
  name: string,
  producerId: string,
  year: number,
  price: number,
  imgURL: string,
};

GameItem.defaultProps = {
  name: 'Game Name',
  producerId: 'Producer Name',
  year: 2020,
  price: 0,
  imgURL: 'https://via.placeholder.com/140x220',
};

export default GameItem;
