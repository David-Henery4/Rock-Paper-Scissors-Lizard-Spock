import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import gameReducer from "./features/game/gameSlice"

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        game: gameReducer,
    },
    middleware: (getDefaultMiddleware) => {
        // Can make serialization more specific
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    }
})