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
    }
  },
});


export const {handlePlayerSelection, handleHouseSelection} = gameSlice.actions

export default gameSlice.reducer

