import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isRulesActive: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleRules: (state) => {
      state.isRulesActive = !state.isRulesActive;
    },
  },
});

export const {toggleRules} = modalSlice.actions

export default modalSlice.reducer

