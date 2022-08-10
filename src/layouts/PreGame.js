import React from "react";
import { Pent, Lizard, Paper, Rock, Scissors, Spock } from "../SVGs/svgs";
import PentSrc from "../images/bg-pentagon.svg"
import playerOptions from "../optionsData/options";
import PreGameOption from "../components";

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
      <div className="pregame__lizard icon-wrap icon-wrap-lizard">
        <div className="icon">
          <Lizard />
        </div>
      </div>
      {/**/}
      <div className="pregame__paper icon-wrap icon-wrap-paper">
        <div className="icon">
          <Paper />
        </div>
      </div>
      {/**/}
      <div className="pregame__rock icon-wrap icon-wrap-rock">
        <div className="icon">
          <Rock />
        </div>
      </div>
      {/**/}
      <div className="pregame__scissors icon-wrap icon-wrap-scissors">
        <div className="icon">
          <Scissors />
        </div>
      </div>
      {/**/}
      <div className="pregame__spock icon-wrap icon-wrap-spock">
        <div className="icon">
          <Spock />
        </div>
      </div>
    </div>
  );
}

export default PreGame;
