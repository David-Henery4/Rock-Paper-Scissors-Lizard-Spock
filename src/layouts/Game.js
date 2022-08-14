import React from 'react'
import { Result} from '../components';
import { useSelector } from "react-redux";
import {PlayerOne, PlayerTwo} from "../components";

const Game = () => {
  const { playersChoice, houseChoice, hasGameFinished } = useSelector(
    (store) => store.game
  );
  return (
    <div className={hasGameFinished ? "outcome-active game" : "game"}>
      {/* Player One */}
      <PlayerOne player={playersChoice} />
      {/* Player Two */}
      <PlayerTwo player={houseChoice} />
      {/* RESULT - rendered when outcome active*/}
      {hasGameFinished && <Result player={playersChoice} house={houseChoice} />}
    </div>
  );
}

export default Game