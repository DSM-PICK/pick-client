import { combineReducers } from "redux";
import date from "./date";
import calander from "./calander";

const rootReducer = combineReducers({
  date,
  calander,
});

export default rootReducer;
