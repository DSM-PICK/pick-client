import { all } from "redux-saga/effects";
import attendanceSaga from "./attendance";
import autoCompleteSaga from "./auto_complete";
import calanderSaga from "./calander";
import preAbsenceSaga from "./pre_absence";
import loginSaga from "./login";
import teacherSaga from "./teacher";
import mainTextSaga from "./main_text";
import noticeSaga from "./notice";

function* rootSaga() {
  yield all([
    calanderSaga(),
    autoCompleteSaga(),
    preAbsenceSaga(),
    attendanceSaga(),
    loginSaga(),
    teacherSaga(),
    mainTextSaga(),
    noticeSaga()
  ]);
}

export default rootSaga;
