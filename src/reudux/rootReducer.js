import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;
