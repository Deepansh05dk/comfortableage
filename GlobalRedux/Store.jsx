import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/CartSlice";
import userReducer from "./Features/UserDetailsSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
