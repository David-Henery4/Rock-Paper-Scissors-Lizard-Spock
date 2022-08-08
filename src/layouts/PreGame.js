import React from "react";
import { Pent, Lizard, Paper, Rock, Scissors, Spock } from "../SVGs/svgs";

// Might have pent as background-image
// An Image or svg

const PreGame = () => {
  return( 
    <div className="pregame">
      <Pent/>
      <Lizard/>
      <Paper/>
      <Rock/>
      <Scissors/>
      <Spock/>
    </div>
  )
}

export default PreGame;
