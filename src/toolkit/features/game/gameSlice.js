import { createSlice } from "@reduxjs/toolkit";
// was in state
import playerOptions from "../../../optionsData/options";

const initialState = {
  score: JSON.parse(localStorage.getItem("score")) || 0,
  isPreGame: true,
  hasGameStarted: false,
  hasGameFinished: false,
  options: playerOptions, // []
  playersChoice: {}, // []
  houseChoice: {}, // []
  houseChoosing: false,
  result: "",
  isPlayerWinner: false,
  isHouseWinner: false
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    handlePlayerSelection: (state, {payload}) => {
        const team = state.options.find(option => option.id === payload)
        state.playersChoice = team
        state.hasGameStarted = true
        state.isPreGame = false
        state.houseChoosing = true
    },
    handleHouseSelection: (state) => {
        const random = Math.floor(Math.random() * state.options.length);
        state.houseChoice = state.options[random]
        state.houseChoosing = false
    },
    handleGameFinished: (state) => {
      state.hasGameFinished = true;
    },
    handleGameOutcome: (state, {payload}) => {
      if (payload === "you win"){
        state.score += 1
        state.result = payload
        state.isPlayerWinner = true
        state.isHouseWinner = false
        localStorage.setItem("score", JSON.stringify(state.score))
      }
      if (payload === "you lose"){
        state.score -= 1
        state.isPlayerWinner = false;
        state.isHouseWinner = true;
        if (state.score <= 0) {
          state.score = 0;
        }
        state.result = payload;
        localStorage.setItem("score", JSON.stringify(state.score))
      }
      if (payload === "draw"){
        state.result = payload;
      }
    },
    handlePlayAgain: (state) => {
      state.isPreGame = true
      state.hasGameFinished = false
      state.hasGameStarted = false
      state.isPlayerWinner = false;
      state.isHouseWinner = false;
      state.playersChoice = {}
      state.houseChoice = {}
      state.result = ""
    }
  },
});


export const { handlePlayerSelection, handleHouseSelection, handleGameOutcome, handlePlayAgain, handleGameFinished } =
  gameSlice.actions;

export default gameSlice.reducer

