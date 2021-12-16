import React from 'react';
import GameItem from '../GameItem';
import * as S from './GameList.style';

function GameList() {
  return (
    <S.Wrapper>
      <GameItem />
      <GameItem />
      <GameItem />
      <GameItem />
      <GameItem />
      <GameItem />
      <GameItem />
      <GameItem />
      <GameItem />
    </S.Wrapper>
  );
}

export default GameList;
