import { createSlice } from "@reduxjs/toolkit";

const setStorLocal = (item, value) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(item, value);
  }
};

const initialState = {};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CHANGECART: (state, action) => {
      const itemCode = action.payload.itemCode;
      state[itemCode].quantity = parseInt(action.payload.qty);
      setStorLocal("cart", JSON.stringify(state));
    },
    ADDTOCART: (state, action) => {
      const itemCode = action.payload.itemCode;
      if (itemCode in state) {
        if (
          state[itemCode].allowedqty >=
          parseInt(state[itemCode].quantity) + 1
        )
          state[itemCode].quantity = parseInt(state[itemCode].quantity) + 1;
      } else {
        state[itemCode] = action.payload;
      }
      setStorLocal("cart", JSON.stringify(state));
    },
    UPDATECART: (state, action) => {
      state.clear();
      state = { ...action.payload };
    },
    REMOVECART: (state, action) => {
      delete state[action.payload];
      setStorLocal("cart", JSON.stringify(state));
    },
    CLEARCART: (state) => {},
  },
});

export const { ADDTOCART, CHANGECART, CLEARCART, REMOVECART, UPDATECART } =
  counterSlice.actions;

export default counterSlice.reducer;
