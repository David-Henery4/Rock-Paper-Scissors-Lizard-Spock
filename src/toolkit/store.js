import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import gameReducer from "./features/game/gameSlice"

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        game: gameReducer,
    },
    middleware: (getDefaultMiddleware) => {
        // can make this more specific
        // come back to
        return getDefaultMiddleware({
          serializableCheck: false,
        })
    }
})