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
  houseChoice: [],
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
    },
  },
});


export const {handlePlayerSelection} = gameSlice.actions

export default gameSlice.reducer

