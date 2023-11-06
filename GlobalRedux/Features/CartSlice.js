"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  1: { name: "Throwback Hip Bag", quantity: 1, price: 99, allowedqty: 5 },
  2: { name: "Hello Bag", quantity: 1, price: 99, allowedqty: 7 },
  3: { name: "Yo Bag", quantity: 1, price: 99, allowedqty: 10 },
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CHANGECART: (state, action) => {
      const itemCode = action.payload.itemCode;
      state[itemCode].quantity = parseInt(action.payload.qty);
      console.log("newcart is ", JSON.stringify(state));
    },
    ADDTOCART: (state, action) => {
      const itemCode = action.payload.itemCode;
      if (itemCode in state) {
        if (state[itemCode].allowedqty >= state[itemCode].quantity + 1)
          state[itemCode].quantity = parseInt(state[itemCode].quantity) + 1;
      } else {
        state[itemCode] = action.payload;
      }
      console.log("newcart is ", JSON.stringify(state));
    },
    REMOVECART: (state, action) => {
      delete state[action.payload];
    },
    CLEARCART: (state) => {},
  },
});

export const { ADDTOCART, CHANGECART, CLEARCART, REMOVECART } =
  counterSlice.actions;

export default counterSlice.reducer;
