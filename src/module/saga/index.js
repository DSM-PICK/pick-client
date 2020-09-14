import { all } from "redux-saga/effects";
import calanderSaga from "./calander";

function* rootSaga() {
  yield all([calanderSaga()]);
}

export default rootSaga;
