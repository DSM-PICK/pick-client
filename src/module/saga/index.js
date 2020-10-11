import { all } from "redux-saga/effects";
import attendanceSaga from "./attendance";
import autoCompleteSaga from "./auto_complete";
import calanderSaga from "./calander";
import preAbsenceSaga from "./pre_absence";
import loginSaga from "./login";

function* rootSaga() {
  yield all([
    calanderSaga(),
    autoCompleteSaga(),
    preAbsenceSaga(),
    attendanceSaga()
  ]);
  yield all([calanderSaga(), loginSaga()]);
}

export default rootSaga;
