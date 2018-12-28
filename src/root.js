import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import stateValidator from 'middlewares/stateValidator';

import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(reducers, initialState, applyMiddleware(stateValidator))}
    >
      {children}
    </Provider>
  );
};
