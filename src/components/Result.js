import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleGameOutcome,
  handlePlayAgain,
} from "../toolkit/features/game/gameSlice";
import { checkforSpock, checkforLizard, checkforPaper, checkforRock, checkforScissors } from "../logicFunctions/logic";


const Result = ({player, house}) => {
  const dispatch = useDispatch()
  const {result} = useSelector(store => store.game)
  const {name: playerName} = player
  const {name: houseName} = house
  
  const handleGameLogic = () => {
    if (playerName === "spock"){
      const result = checkforSpock(playerName,houseName)
      dispatch(handleGameOutcome(result))
    }
    if (playerName === "lizard"){
      const result = checkforLizard(playerName, houseName);
      dispatch(handleGameOutcome(result));
    }
    if (playerName === "rock"){
      const result = checkforRock(playerName, houseName);
      dispatch(handleGameOutcome(result));
    }
    if (playerName === "paper"){
      const result = checkforPaper(playerName, houseName);
      dispatch(handleGameOutcome(result));
    }
    if (playerName === "scissors"){
      const result = checkforScissors(playerName, houseName);
      dispatch(handleGameOutcome(result));
    }
  }
  //
  const playAgain = () => {
    dispatch(handlePlayAgain());
  }
  //
  useEffect(() => {
    handleGameLogic();
    // eslint-disable-next-line
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
