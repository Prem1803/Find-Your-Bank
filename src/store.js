import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { bankReducer } from "./reducers/bankReducers";

const reducer = combineReducers({
  banks: bankReducer,
});

const initialState = {
  banks: { cityBanks: {} },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
