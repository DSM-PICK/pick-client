import { combineReducers } from "redux";
import date from "./date";
import calander from "./calander";
import club from "./club";
import modal from "./modal";
import adminModal from "./admin_modal";
import preReport from "./pre_report";
import mainText from "./main_text";
import priorAbsent from "./prior_absent";
import autoComplete from "./auto_complete";

const rootReducer = combineReducers({
  date,
  calander,
  club,
  modal,
  adminModal,
  preReport,
  mainText,
  priorAbsent,
  autoComplete
});

export default rootReducer;
