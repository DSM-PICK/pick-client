import { combineReducers } from "redux";
import date from "./date";
import calander from "./calander";
import club from "./club";
import modal from "./modal";
import adminModal from "./admin_modal";
import mainText from "./main_text";
import preAbsence from "./pre_absence";
import autoComplete from "./auto_complete";
import teacher from "./teacher";

const rootReducer = combineReducers({
  date,
  calander,
  club,
  modal,
  adminModal,
  mainText,
  preAbsence,
  autoComplete,
  teacher
});

export default rootReducer;
