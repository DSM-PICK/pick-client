import { combineReducers } from "redux";
import dateReducer from "./date";

const rootReducer = combineReducers({
  date: dateReducer,
});

export default rootReducer;
