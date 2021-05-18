import { call, put, takeEvery } from "redux-saga/effects";
import { GET_SEARCH, getSearchSuccess } from "../../action/search";
import { requestAdminGetApiWithAccessToken } from "../../../lib/requestApi";

function* getSearchSaga(action) {
  try {
    const res = yield call(
      requestAdminGetApiWithAccessToken,
      `/venus/clubs/student-name/${action.payload}`
    );
    const clubNames = res.data.map(({ club_name }) => club_name);
    yield put(getSearchSuccess(clubNames));
  } catch (err) {}
}

function* searchSaga() {
  yield takeEvery(GET_SEARCH, getSearchSaga);
}

export default searchSaga;
