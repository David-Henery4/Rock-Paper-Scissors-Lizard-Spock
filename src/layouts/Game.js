import React from 'react'
import { Result, Placeholder } from '../components';
import { Lizard, Paper, Rock, Scissors, Spock } from "../SVGs/svgs";
import { useSelector } from "react-redux";
import {PlayerOne, PlayerTwo} from "../components";

const Game = () => {
  const { playersChoice, houseChoice, hasGameFinished } = useSelector(
    (store) => store.game
  );
  return (
    // WILL ADD "outcome-active" WHEN OUTCOME ACTIVE
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