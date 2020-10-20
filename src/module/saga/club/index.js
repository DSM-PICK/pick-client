import { put, takeEvery } from "redux-saga/effects";
import {
  CHANGE_CLUB_DATA_SAGA,
  updateClubDetail,
  updateClubList,
  UPDATE_CLUB_DETAIL_SAGA,
  UPDATE_CLUB_LIST_SAGA,
  ADD_CLUB_SAGA,
  DELETE_CLUB_SAGA,
  updateClubListSaga as updateClubListSagaCreater
} from "../../action/club";
import {
  methodType,
  requestAdminApiWithAccessToken,
  requestAdminGetApiWithAccessToken,
  requestDeleteApiWithAccessToken
} from "../../../lib/requestApi";

function* updateClubListSaga(action) {
  const res = yield requestAdminGetApiWithAccessToken(`/venus/clubs`, {
    "Cache-Control": "no-store"
  });
  yield put(updateClubList(res.data));
}

function* upadteClubDetailSaga(action) {
  const res = yield requestAdminGetApiWithAccessToken(
    `/venus/club/${action.payload}`
  );

  yield put(updateClubDetail(res.data));
}

function* changeClubDataSaga(action) {
  const { name } = action.payload;
  try {
    const res = yield requestAdminApiWithAccessToken(
      methodType.PATCH,
      `/venus/club/${name}`,
      action.payload
    );
    yield put(updateClubListSagaCreater());
  } catch (err) {}
}

function* addClubSaga(action) {
  try {
    const res = yield requestAdminApiWithAccessToken(
      methodType.POST,
      "/venus/club",
      action.payload
    );
    alert("추가에 성공했습니다");
    yield put(updateClubListSagaCreater());
  } catch (err) {}
}

function* deleteClubSaga(action) {
  try {
    const data = action.payload.map(async clubName => {
      const data = await requestDeleteApiWithAccessToken(
        `/venus/club/${clubName}`
      );
    });
    alert("성공적으로 삭제했습니다");
    window.location.reload();
  } catch (err) {}
}

function* clubSaga() {
  yield takeEvery(UPDATE_CLUB_LIST_SAGA, updateClubListSaga);
  yield takeEvery(UPDATE_CLUB_DETAIL_SAGA, upadteClubDetailSaga);
  yield takeEvery(CHANGE_CLUB_DATA_SAGA, changeClubDataSaga);
  yield takeEvery(ADD_CLUB_SAGA, addClubSaga);
  yield takeEvery(DELETE_CLUB_SAGA, deleteClubSaga);
}

export default clubSaga;
