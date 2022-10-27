import { combineReducers } from "@reduxjs/toolkit";
import { portfolioReducer } from "./reducers/portfolio-reducer";

export const rootReducer = combineReducers({
  portfolioReducer,
})