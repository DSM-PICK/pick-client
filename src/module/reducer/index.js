import { combineReducers } from "redux";
import date from "./date";
import calander from "./calander";
import club from "./club";
import modal from "./modal";
import adminModal from "./admin_modal";
import mainText from "./main_text";
import preAbsence from "./pre_absence";
import teacher from "./teacher";
import attendance from "./attendance";
import notice from "./notice";

const rootReducer = combineReducers({
  adminModal,
  attendance,
  calander,
  club,
  date,
  mainText,
  modal,
  notice,
  preAbsence,
  teacher
});

export default rootReducer;
