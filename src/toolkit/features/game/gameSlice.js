import { createSlice } from "@reduxjs/toolkit";
// was in state
import playerOptions from "../../../optionsData/options";

const initialState = {
  score: 0,
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
    },
    handleGameOutcome: (state, {payload}) => {
      state.hasGameFinished = true
      if (payload === "win"){
        state.score = + 1
        state.result = payload
      }
      if (payload === "lose"){
        state.score = - 1
        if (state.score <= 0) {
          state.score = 0;
        }
        state.result = payload;
      }
      if (payload === "draw"){
        state.result = payload;
      }
    }
  },
});


export const { handlePlayerSelection, handleHouseSelection, handleGameOutcome } =
  gameSlice.actions;

export default gameSlice.reducer

