import { all } from "redux-saga/effects";
import attendanceSaga from "./attendance";
import autoCompleteSaga from "./auto_complete";
import calanderSaga from "./calander";
import preAbsenceSaga from "./pre_absence";
import loginSaga from "./login";
import teacherSaga from "./teacher";
import mainText from "./main_text";

function* rootSaga() {
  yield all([
    calanderSaga(),
    autoCompleteSaga(),
    preAbsenceSaga(),
    attendanceSaga(),
    loginSaga(),
    teacherSaga(),
    mainText()
  ]);
}

export default rootSaga;
