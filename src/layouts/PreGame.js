import React from "react";
import PentSrc from "../images/bg-pentagon.svg"
import { PreGameOption } from "../components";
import { useSelector } from "react-redux";


const PreGame = () => {
  const {options} = useSelector(store => store.game)

  return (
    <div className="pregame">
      <img className="pregame__pent" src={PentSrc} alt="background-pentagon" />
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
