"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADDUSER: (state, action) => {
      state[token] = action.payload;
      console.log("newUSER is ", JSON.stringify(state));
    },
  },
});

export const { ADDUSER } = userSlice.actions;

export default userSlice.reducer;
