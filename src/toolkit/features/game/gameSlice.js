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
        // state.hasGameFinished = true;
        // setInterval(() => {
        //   state.hasGameFinished = true;
        // }, 1500);
    },
    handleGameFinished: (state) => {
      state.hasGameFinished = true;
    },
    handleGameOutcome: (state, {payload}) => {
      if (payload === "you win"){
        console.log(state.score)
        state.score += 1
        state.result = payload
        localStorage.setItem("score", JSON.stringify(state.score))
      }
      if (payload === "you lose"){
        console.log(state.score);
        state.score -= 1
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
      state.playersChoice = {}
      state.houseChoice = {}
      state.result = ""
    }
  },
});


export const { handlePlayerSelection, handleHouseSelection, handleGameOutcome, handlePlayAgain, handleGameFinished } =
  gameSlice.actions;

export default gameSlice.reducer

