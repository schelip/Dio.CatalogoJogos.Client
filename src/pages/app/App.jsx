import React, { useEffect, useState } from 'react';
import GameList from '../../components/GameList';
import Header from '../../components/Header';
import * as S from './App.style';
import { getGames, getProducers } from '../../services/catalogService';

function App() {
  const [games, setGames] = useState([]);
  const [producers, setProducers] = useState([]);
  const [token, setToken] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      setGames(await getGames(1, 20));
      setProducers(await getProducers(1, 20));
    };
    fetchGames();
  }, []);

  return (
    <>
      <Header title="Dio.CatalogoJogos" setToken={setToken} />
      <S.ContentWrapper>
        <GameList games={games} producers={producers} token={token} />
      </S.ContentWrapper>
    </>
  );
}

export default App;
