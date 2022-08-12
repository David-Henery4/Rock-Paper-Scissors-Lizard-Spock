import React from 'react'
import { Lizard } from '../SVGs/svgs'
import { useSelector } from 'react-redux'

/* WILL ADD "playerOne-outcome-active" WHEN OUTCOME ACTIVE */

const PlayerOne = ({player}) => {
    const { hasGameFinished } = useSelector((store) => store.game);
    const {colors} = player
  return (
    <div className={hasGameFinished ? "playerOne-outcome-active playerOne" : "playerOne"}>
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