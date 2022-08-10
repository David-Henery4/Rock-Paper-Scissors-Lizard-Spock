import { createSlice } from "@reduxjs/toolkit";
import playerOptions from "../../../optionsData/options";

const initialState = {
    score: 0,
    isPreGame : true,
    hasGameStarted: false,
    hasGameFinished: false,
    options: playerOptions,
    playersChoice: [],
    houseChoice: [],
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {

    }
})

export default gameSlice.reducer

