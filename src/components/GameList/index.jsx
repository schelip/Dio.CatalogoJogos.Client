import {
  number, string, arrayOf, shape,
} from 'prop-types';
import React from 'react';
import GameItem from '../GameItem';
import * as S from './GameList.style';

function GameList({ games }) {
  return (
    <S.Wrapper>
      {games.map((game) => (
        <GameItem
          key={game.id}
          name={game.nome}
          producerId={game.produtoraId}
          year={game.ano}
          price={game.valor}
        />
      ))}
    </S.Wrapper>
  );
}

GameList.propTypes = {
  games: arrayOf(shape({
    id: string,
    nome: string,
    produtoraId: string,
    ano: number,
    valor: number,
  })),
};

GameList.defaultProps = {
  games: [],
};

export default GameList;
