import { configureStore } from "@reduxjs/toolkit";
import { MenuApi } from "./api";

export const store = configureStore({
    reducer : {
        //counter : counterReducer
        [MenuApi.reducerPath] : MenuApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MenuApi.middleware)
    
})