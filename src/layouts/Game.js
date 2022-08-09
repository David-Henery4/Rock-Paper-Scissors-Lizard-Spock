import React from 'react'
import { Result } from '../components';
import { Lizard, Paper, Rock, Scissors, Spock } from "../SVGs/svgs";

const Game = () => {
  return (
    <div className="game outcome-active">
      {/* PLAYERS */}

      {/* Player One */}
      <div className="playerOne playerOne-outcome-active">
        <p className="player__title--desk">THE HOUSE PICKED</p>
        <div className="icon-wrap icon-wrap-active icon-wrap-lizard">
          <div className="icon icon-active">
            <Lizard />
          </div>
        </div>
        <p className="player__title">THE HOUSE PICKED</p>
      </div>

      {/* div-className="player-placeHolder" */}

      {/* Player Two */}
      <div className="playerTwo playerTwo-outcome-active">
        <p className="player__title--desk">THE HOUSE PICKED</p>
        <div className="icon-wrap icon-wrap-spock icon-wrap-active">
          <div className="icon icon-active">
            <Spock />
          </div>
        </div>
        <p className="player__title">THE HOUSE PICKED</p>
      </div>
      {/* RESULT */}
      <Result />
    </div>
  );
}

export default Game