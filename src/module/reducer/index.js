import { combineReducers } from "redux";
import date from "./date";
import calander from "./calander";
import club from "./club";
import modal from "./modal";

const rootReducer = combineReducers({
  date,
  calander,
  club,
  modal,
});

export default rootReducer;
