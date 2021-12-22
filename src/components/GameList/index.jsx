import {
  func,
  number, string, arrayOf, shape,
} from 'prop-types';
import React, { useState } from 'react';
import { patchUserGames } from '../../services/catalogService';
import GameItem from '../GameItem';
import PriceFilter from '../PriceFilter';
import ProducerFilter from '../ProducerFilter';
import YearFilter from '../YearFilter';
import * as S from './GameList.style';

function GameList({
  games, producers, token, user, setUser,
}) {
  const [minYear, setMinYear] = useState(-Infinity);
  const [maxYear, setMaxYear] = useState(Infinity);
  const [selectedProducers, setSelectedProducers] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const findProducer = (id) => producers.find((p) => p.id === id);

  const getAllProducers = (game) => {
    const results = [];
    let producer = findProducer(game.produtoraId);
    if (producer) {
      results.push(producer);
      while (producer.produtoraMaeId !== '00000000-0000-0000-0000-000000000000') {
        producer = findProducer(producer.produtoraMaeId);
        results.push(producer);
      }
    }
    return results;
  };

  const shouldRender = (game) => game.ano >= minYear
    && game.ano <= maxYear
    && (selectedProducers.length === 0
      || selectedProducers.some((p) => getAllProducers(game).includes(p)))
    && (selectedPriceRanges.length === 0
      || selectedPriceRanges.some((p) => p[0] <= game.valor && game.valor <= p[1]));

  const handleBuy = async (game) => {
    const response = await patchUserGames(token, user.id, game.id);
    if (response) setUser(response);
  };

  return (
    <S.Wrapper>
      <S.Filter>
        <h3>Filtrar Por</h3>
        <YearFilter
          years={games.map((game) => game.ano)}
          setMinYear={setMinYear}
          setMaxYear={setMaxYear}
        />
        <ProducerFilter
          producers={producers}
          setSelectedProducers={setSelectedProducers}
        />
        <PriceFilter
          prices={games.map((game) => game.valor)}
          setSelectedPriceRanges={setSelectedPriceRanges}
        />
      </S.Filter>
      <S.ListWrapper>
        {games.map((game) => shouldRender(game)
          && (
          <GameItem
            key={game.id}
            game={game}
            producerNames={getAllProducers(game).map((p) => p.nome)}
            handleBuy={handleBuy}
            isOwned={user.jogos && user.jogos.some((g) => g === game.id)}
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
  producers: arrayOf(shape({
    id: string,
    nome: string,
    isoPais: string,
    produtoraMaeId: string,
    produtorasFilhas: arrayOf(string),
    jogosProduzidos: arrayOf(string),
  })),
  token: string,
  user: shape({
    id: string,
    email: string,
    fundos: number,
    nome: string,
  }),
  setUser: func,
};

GameList.defaultProps = {
  games: [],
  producers: [],
  token: '',
  user: {},
  setUser: () => { },
};

export default GameList;
