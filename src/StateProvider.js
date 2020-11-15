import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer where everything lives
export const StateContext = createContext();

// sets up the data layer
export const StateProvider = ({ reducer,
initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
     </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);