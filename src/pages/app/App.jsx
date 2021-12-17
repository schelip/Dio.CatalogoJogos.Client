import React, { useEffect, useState } from 'react';
import GameList from '../../components/GameList';
import Layout from '../../components/Layout';
import { getGames } from '../../services/catalogService';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      setGames(await getGames(1, 5));
    };
    fetchGames();
  }, []);

  return (
    <Layout>
      <GameList games={games} />
    </Layout>
  );
}

export default App;
