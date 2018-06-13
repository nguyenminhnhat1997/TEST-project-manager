import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer/index";
import thunk from "redux-thunk";
const midleware = [thunk];
const initState = {};
const store = createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(...midleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
