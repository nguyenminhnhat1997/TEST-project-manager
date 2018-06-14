import { combineReducers } from "redux";
import ReducerProject from "./ReducerProject";
import ReducerNember from "./ReducerNember";
export default combineReducers({
  project: ReducerProject,
  nember: ReducerNember
});
