import { combineReducers } from "redux";
import reducer from "./reducer";

export default function createReducer(asyncReducers = {}) {
  return combineReducers({
    reducer,
    ...asyncReducers,
  });
}
