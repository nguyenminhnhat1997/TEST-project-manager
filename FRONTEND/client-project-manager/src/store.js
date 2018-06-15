import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer/index";
import thunk from "redux-thunk";
const midleware = [thunk];
const initState = {};
const store = createStore(
  rootReducer,
  initState,
  compose(applyMiddleware(...midleware))
);

export default store;
