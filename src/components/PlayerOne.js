import React from 'react'
import { Lizard } from '../SVGs/svgs'

/* WILL ADD "playerOne-outcome-active" WHEN OUTCOME ACTIVE */

const PlayerOne = ({player}) => {
    const {colors} = player
  return (
    <div className="playerOne">
      <p className="player__title--desk">YOU PICKED</p>
      <div
        className="icon-wrap icon-wrap-active"
        style={{
          background: `linear-gradient(${colors.colorLight}, ${colors.colorDark})`,
        }}
      >
        <div className="icon icon-active">
          <player.icon />
        </div>
      </div>
      <p className="player__title">YOU PICKED</p>
    </div>
  );
}

export default PlayerOne