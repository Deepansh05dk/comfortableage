import React, { useReducer, createContext } from "react";
import combineReducers from "react-combine-reducers";
import cartReducer from "./Reducers/CartReducer";
import userDetailsReducer from "./Reducers/UserDetailsReducer";

// cart details initial state
const cart = {};

// user details initial state
const userDetails = {
  user: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null,
  token: sessionStorage.getItem("access-token")
    ? sessionStorage.getItem("access-token")
    : null,
};

const [reducerCombined, initialStateCombined] = combineReducers({
  cart: [cartReducer, cart],
  userDetails: [userDetailsReducer, userDetails],
  // ...
});

export const Statecontext = createContext();
export const DataProvider = ({ children }) => {
  return (
    <Statecontext.Provider
      value={useReducer(reducerCombined, initialStateCombined)}
    >
      {children}
    </Statecontext.Provider>
  );
};
