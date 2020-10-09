import { all } from "redux-saga/effects";
import calanderSaga from "./calander";
import loginSaga from "./login";

function* rootSaga() {
  yield all([calanderSaga(), loginSaga()]);
}

export default rootSaga;
