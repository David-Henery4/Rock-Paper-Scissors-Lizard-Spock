import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleGameOutcome,
  handlePlayAgain,
} from "../toolkit/features/game/gameSlice";
import { checkforSpock, checkforLizard, checkforPaper, checkforRock, checkforScissors } from "../logicFunctions/logic";

// sort the deciding game logic here
// dont forget to add classes to the other components, when "hasGameFinished" state boolean changes
// also add and remove score (add = win, remove = lose, draw = nadda)

const Result = ({player, house}) => {
  const dispatch = useDispatch()
  const {result} = useSelector(store => store.game)
  console.log(player)
  console.log(house)
  const {name: playerName} = player
  const {name: houseName} = house
  
  const handleGameLogic = () => {
    if (playerName === "spock"){
      const result = checkforSpock(playerName,houseName)
      console.log(result)
      dispatch(handleGameOutcome(result))
    }
    if (playerName === "lizard"){
      const result = checkforLizard(playerName, houseName);
      console.log(result)
      dispatch(handleGameOutcome(result));
    }
    if (playerName === "rock"){
      const result = checkforRock(playerName, houseName);
      console.log(result)
      dispatch(handleGameOutcome(result));
    }
    if (playerName === "paper"){
      const result = checkforPaper(playerName, houseName);
      console.log(result)
      dispatch(handleGameOutcome(result));
    }
    if (playerName === "scissors"){
      const result = checkforScissors(playerName, houseName);
      console.log(result)
      dispatch(handleGameOutcome(result));
    }
  }
  //
  const playAgain = () => {
    dispatch(handlePlayAgain());
  }
  //
  useEffect(() => {
    handleGameLogic()
  }, [houseName])
  //
  return (
    <div className="result">
      <h4 className="result__title">{result.toUpperCase()}</h4>
      <button className="result__btn" onClick={playAgain}>PLAY AGAIN</button>
    </div>
  );
};

export default Result;
