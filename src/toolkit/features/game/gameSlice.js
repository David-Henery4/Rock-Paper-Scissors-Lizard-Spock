import { createSlice } from "@reduxjs/toolkit";
import playerOptions from "../../../optionsData/options";

const initialState = {
    score: 0,
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

