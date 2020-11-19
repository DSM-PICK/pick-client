import { all } from "redux-saga/effects";
import attendanceSaga from "./attendance";
import autoCompleteSaga from "./auto_complete";
import calanderSaga from "./calander";
import preReportSaga from "./pre_report";
import loginSaga from "./login";
import teacherSaga from "./teacher";
import clubSaga from "./club";
import mainTextSaga from "./main_text";
import noticeSaga from "./notice";

function* rootSaga() {
  yield all([
    attendanceSaga(),
    autoCompleteSaga(),
    calanderSaga(),
    loginSaga(),
    teacherSaga(),
    clubSaga(),
    mainTextSaga(),
    noticeSaga(),
    teacherSaga(),
    preReportSaga()
  ]);
}

export default rootSaga;
