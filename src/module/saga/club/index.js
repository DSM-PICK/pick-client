import { call, takeEvery } from "redux-saga/effects";
import { UPDATE_CLUB_LIST_SAGA } from "../../action/club";

function* updateClubListSaga(action) {}

function* clubSaga() {
  yield takeEvery(UPDATE_CLUB_LIST_SAGA, updateClubListSaga);
}

export default clubSaga;
