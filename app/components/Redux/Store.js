import { configureStore } from "@reduxjs/toolkit"
import bazarReducer from "./BazarSlice";

export const Store = configureStore({
    reducer:bazarReducer
})