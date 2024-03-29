import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
      console.log(123);
      return state;
    },
    logout: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = accountSlice.actions;

export default accountSlice.reducer;
