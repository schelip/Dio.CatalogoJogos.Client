import React, { useEffect, useState } from 'react';
import GameList from '../../components/GameList';
import Header from '../../components/Header';
import * as S from './App.style';
import { getGames, getProducers } from '../../services/catalogService';

function App() {
  const [games, setGames] = useState([]);
  const [producers, setProducers] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      // There is yet no implemented method on the backend that fetches all entities, so fetching a large amount is being used as a workaround for now
      setGames(await getGames(1, 200));
      setProducers(await getProducers(1, 200));
    };
    fetchGames();
  }, []);

  return (
    <>
      <Header title="Dio.CatalogoJogos" setToken={setToken} user={user} setUser={setUser} />
      <S.ContentWrapper>
        <GameList games={games} producers={producers} token={token} user={user} setUser={setUser} />
      </S.ContentWrapper>
    </>
  );
}

export default App;
