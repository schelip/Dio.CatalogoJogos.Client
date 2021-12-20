import React, { useEffect, useState } from 'react';
import {
  arrayOf, number, string,
} from 'prop-types';
import * as S from './GameItem.style';
import { getPosterURL } from '../../services/imdbService';

function GameItem({
  name,
  producerNames,
  year,
  price,
}) {
  const [posterURL, setPosterURL] = useState('https://via.placeholder.com/140x220');

  useEffect(() => {
    const fetchPosterURL = async () => {
      const url = await getPosterURL(name, year);
      if (url) setPosterURL(url);
    };
    fetchPosterURL();
  }, []);

  return (
    <S.Wrapper>
      <img src={posterURL} width={140} height={220} alt={`Poster for ${name}`} />
      <S.SubWrapper>
        <S.WrapperInfo>
          <h2>{name}</h2>
          <h4>{year}</h4>
          <div>
            {producerNames[0]}
            {producerNames.slice(1).map((p) => (
              <S.ParentProducer key={p}>
                {` / ${p}`}
              </S.ParentProducer>
            ))}
          </div>
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
  producerNames: arrayOf(string),
  year: number,
  price: number,
};

GameItem.defaultProps = {
  name: 'Game Name',
  producerNames: ['Producer Name'],
  year: 0,
  price: 0,
};

export default GameItem;
