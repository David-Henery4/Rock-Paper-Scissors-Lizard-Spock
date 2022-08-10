import React from 'react'
import { Result, Placeholder } from '../components';
import { Lizard, Paper, Rock, Scissors, Spock } from "../SVGs/svgs";

const Game = () => {
  return (
    // WILL ADD "outcome-active" WHEN OUTCOME ACTIVE
    <div className="game">
      {/* Player One */}
      {/* WILL ADD "playerOne-outcome-active" WHEN OUTCOME ACTIVE */}
      <div className="playerOne">
        <p className="player__title--desk">THE HOUSE PICKED</p>
        <div className="icon-wrap icon-wrap-active icon-wrap-lizard">
          <div className="icon icon-active">
            <Lizard />
          </div>
        </div>
        <p className="player__title">THE HOUSE PICKED</p>
      </div>

      

      {/* Player Two */}
      {/* WILL ADD "playerTwo-outcome-active" WHEN OUTCOME ACTIVE */}

      <div className="playerTwo">
        <p className="player__title--desk">THE HOUSE PICKED</p>
        <Placeholder/>
        {/* <div className="icon-wrap icon-wrap-spock icon-wrap-active">
          <div className="icon icon-active">
            <Spock />
          </div>
        </div> */}
        <p className="player__title">THE HOUSE PICKED</p>
      </div>

      {/* RESULT */}
      <Result />
    </div>
  );
}

export default Game