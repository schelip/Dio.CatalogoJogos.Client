import React, { useEffect, useState } from 'react';
import GameList from '../../components/GameList';
import Layout from '../../components/Layout';
import { getGames, getProducers } from '../../services/catalogService';

function App() {
  const [games, setGames] = useState([]);
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      setGames(await getGames(1, 20));
      setProducers(await getProducers(1, 20));
    };
    fetchGames();
  }, []);

  return (
    <Layout>
      <GameList games={games} producers={producers} />
    </Layout>
  );
}

export default App;
