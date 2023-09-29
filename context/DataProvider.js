import React, { useReducer, createContext, useEffect } from "react";
import cartReducer from "./Reducers/CartReducer";
import userDetailsReducer from "./Reducers/UserDetailsReducer";

const Usercontext = createContext(null);
const Cartcontext = createContext(null);
var cart = {};
var userDetails = {};

export const DataProvider = ({ children }) => {
  useEffect(() => {
    // cart details initial state
    cart = {
      ...(localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : {}),
    };

    // user details initial state
    userDetails = {
      user: sessionStorage.getItem("user")
        ? JSON.parse(sessionStorage.getItem("user"))
        : null,
      token: sessionStorage.getItem("access-token")
        ? sessionStorage.getItem("access-token")
        : null,
    };
  }, []);

  return (
    <Usercontext.Provider value={useReducer(userDetailsReducer, userDetails)}>
      <Cartcontext.Provider value={useReducer(cartReducer, cart)}>
        {children}
      </Cartcontext.Provider>
    </Usercontext.Provider>
  );
};
