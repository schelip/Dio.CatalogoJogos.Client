import React, { useEffect, useState } from 'react';
import {
  arrayOf, number, shape, string,
  func,
  bool,
} from 'prop-types';
import * as S from './GameItem.style';
import { getPosterURL } from '../../services/imdbService';

function GameItem({
  game,
  producerNames,
  handleBuy,
  isOwned,
}) {
  const [posterURL, setPosterURL] = useState('https://via.placeholder.com/140x220');

  useEffect(() => {
    const fetchPosterURL = async () => {
      const url = await getPosterURL(game.nome, game.ano);
      if (url) setPosterURL(url);
    };
    fetchPosterURL();
  }, []);

  return (
    <S.Wrapper>
      <img src={posterURL} width={140} height={220} alt={`Poster for ${game.nome}`} />
      <S.SubWrapper>
        <S.WrapperInfo>
          <h2>{game.nome}</h2>
          <h4>{game.ano}</h4>
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
          <h2>{`R$${game.valor.toFixed(2)}`}</h2>
          <S.BuyButton
            type="button"
            className={isOwned ? 'owned' : 'notOwned'}
            onClick={() => handleBuy(game)}
            disable={isOwned}
          >
            {isOwned ? 'Possuído' : 'Comprar' }
          </S.BuyButton>
        </S.WrapperPrice>
      </S.SubWrapper>
    </S.Wrapper>
  );
}

GameItem.propTypes = {
  game: shape({
    nome: string,
    ano: number,
    valor: number,
  }),
  producerNames: arrayOf(string),
  handleBuy: func,
  isOwned: bool,
};

GameItem.defaultProps = {
  game: {},
  producerNames: ['Producer Name'],
  handleBuy: () => { },
  isOwned: false,
};

export default GameItem;
