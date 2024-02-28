import { combineReducers } from "@reduxjs/toolkit";
import accountSlice from "./feature/accountSlice";
import courseSlice from "./feature/courseSlice";

const rootReducer = combineReducers({
  account: accountSlice,
  course: courseSlice,
});

export default rootReducer;
