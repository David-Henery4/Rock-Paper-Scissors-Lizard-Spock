import React from "react";
import { Pent, Lizard, Paper, Rock, Scissors, Spock } from "../SVGs/svgs";
import PentSrc from "../images/bg-pentagon.svg"
import playerOptions from "../optionsData/options";
import { PreGameOption } from "../components";

// Might have pent as background-image
// An Image or svg

// <div className="pregame__lizard icon-wrap icon-wrap-lizard">
//  <div className="icon">
//    <Lizard />
//  </div>
// </div>;

const PreGame = () => {
  return (
    <div className="pregame">
      {/* <Pent className="pregame__pent" /> */}
      <img className="pregame__pent" src={PentSrc} alt="" />
      {playerOptions.map(choice => {
        const { preGameGridPos, colors, icon, id } = choice;
        return (
          <PreGameOption key={id} pos={preGameGridPos} colors={colors} icon={icon} />
        );
      })}
    </div>
  );
}

export default PreGame;
