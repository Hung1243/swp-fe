import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlice";
import accountSlice from "./feature/accountSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
  account: accountSlice,
});

export default rootReducer;
