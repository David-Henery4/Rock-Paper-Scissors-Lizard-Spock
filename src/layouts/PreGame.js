import React from "react";
// import { Pent, Lizard, Paper, Rock, Scissors, Spock } from "../SVGs/svgs";
import PentSrc from "../images/bg-pentagon.svg"
// import playerOptions from "../optionsData/options";
import { PreGameOption } from "../components";
import { useDispatch, useSelector } from "react-redux";


const PreGame = () => {
  const {options} = useSelector(store => store.game)

  return (
    <div className="pregame">
      {/* <Pent className="pregame__pent" /> */}
      <img className="pregame__pent" src={PentSrc} alt="" />
      {options.map((choice) => {
        const { id } = choice;
        return (
          <PreGameOption key={id} {...choice}/>
        )
      })}
    </div>
  );
}

export default PreGame;

// quick notes

// Might have pent as background-image
// An Image or svg

// <div className="pregame__lizard icon-wrap icon-wrap-lizard">
//  <div className="icon">
//    <Lizard />
//  </div>
// </div>;