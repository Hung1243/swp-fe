import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlice";
import accountSlice from "./feature/accountSlice";
import cartSlice from "./feature/cartSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
  account: accountSlice,
  cart: cartSlice,
});

export default rootReducer;
