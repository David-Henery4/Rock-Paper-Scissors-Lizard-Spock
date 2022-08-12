import React from 'react'
import {Placeholder} from "../components"
import { useSelector } from "react-redux";

/* WILL ADD "playerTwo-outcome-active" WHEN OUTCOME ACTIVE */

const PlayerTwo = ({player}) => {
    const {colors} = player
    const { houseChoosing, hasGameFinished } = useSelector(
      (store) => store.game
    );
  return (
    <div
      className={
        hasGameFinished ? "playerTwo-outcome-active playerTwo" : "playerTwo"
      }
    >
      <p className="player__title--desk">THE HOUSE PICKED</p>
      {houseChoosing ? (
        <Placeholder />
      ) : (
        <div
          className="icon-wrap icon-wrap-spock icon-wrap-active"
          style={{
            background: `linear-gradient(${colors.colorLight}, ${colors.colorDark})`,
            borderBottom: `0.7em solid ${colors.shadowColor}`,
          }}
        >
          <div className="icon icon-active">
            <player.icon />
          </div>
        </div>
      )}

      <p className="player__title">THE HOUSE PICKED</p>
    </div>
  );
}

export default PlayerTwo