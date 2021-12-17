import {
  number, string, arrayOf, shape,
} from 'prop-types';
import React, { useState } from 'react';
import GameItem from '../GameItem';
import YearFilter from '../YearFilter';
import * as S from './GameList.style';

function GameList({ games }) {
  const [minYear, setMinYear] = useState(-Infinity);
  const [maxYear, setMaxYear] = useState(Infinity);

  const handleYearFilterCallback = (filterData) => {
    const { updatedMinYear, updatedMaxYear } = filterData;
    setMinYear(updatedMinYear);
    setMaxYear(updatedMaxYear);
  };

  return (
    <S.Wrapper>
      <S.Filter>
        <h3>Filtrar Por</h3>
        <YearFilter
          years={[1990, 1991, 1992, 1993, 1994, 1996]}// games.map((game) => game.ano)}
          parentCallback={handleYearFilterCallback}
        />
        <S.ProducerWrapper>
          <p>Produtora</p>
        </S.ProducerWrapper>
        <S.PriceWrapper>
          <p>Preço</p>
        </S.PriceWrapper>
      </S.Filter>
      <S.ListWrapper>
        {games.map((game) => game.ano >= minYear && game.ano <= maxYear
          && (
          <GameItem
            key={game.id}
            name={game.nome}
            producerId={game.produtoraId}
            year={game.ano}
            price={game.valor}
          />
          ))}
      </S.ListWrapper>
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
