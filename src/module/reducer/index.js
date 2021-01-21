import { combineReducers } from "redux";
import date from "./date";
import calander from "./calander";
import club from "./club";
import modal from "./modal";
import adminModal from "./admin_modal";
import mainText from "./main_text";
import preReport from "./pre_report";
import teacher from "./teacher";
import attendance from "./attendance";
import notice from "./notice";
import modalWrap from "./modal_wrap";
import account from "./account";
import toggle from "./toggle";
import dAttendance from "./d_attendance";

const rootReducer = combineReducers({
  account,
  adminModal,
  attendance,
  calander,
  club,
  date,
  dAttendance,
  mainText,
  modal,
  modalWrap,
  notice,
  preReport,
  teacher,
  toggle
});

export default rootReducer;
