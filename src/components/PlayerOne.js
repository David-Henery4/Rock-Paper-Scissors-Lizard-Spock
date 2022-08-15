import React from 'react'
import { useSelector } from 'react-redux'

const PlayerOne = ({player}) => {
    const { hasGameFinished, isPlayerWinner } = useSelector((store) => store.game);
    const {colors} = player;
  return (
    <div
      className={
        hasGameFinished ? "playerOne-outcome-active playerOne" : "playerOne"
      }
    >
      <p className="player__title--desk">YOU PICKED</p>
      <div className="winner">
        {isPlayerWinner &&<div className="winner-styles winner-layer1"></div>}
        {isPlayerWinner &&<div className="winner-styles winner-layer2"></div>}
        {isPlayerWinner &&<div className="winner-styles winner-layer3"></div>}
        <div
          className="icon-wrap icon-wrap-active"
          style={{
            background: `linear-gradient(${colors.colorLight}, ${colors.colorDark})`,
            borderBottom: `0.7em solid ${colors.shadowColor}`,
          }}
        >
          <div className="icon icon-active">
            <player.icon />
          </div>
        </div>
      </div>
      <p className="player__title">YOU PICKED</p>
    </div>
  );
}

export default PlayerOne