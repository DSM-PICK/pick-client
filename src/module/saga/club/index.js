import { call, put, takeEvery } from "redux-saga/effects";
import {
  CHANGE_CLUB_DATA_SAGA,
  updateClubDetail,
  updateClubList,
  UPDATE_CLUB_DETAIL_SAGA,
  UPDATE_CLUB_LIST_SAGA,
  ADD_CLUB_SAGA,
  DELETE_CLUB_SAGA,
  updateClubListSaga as updateClubListSagaCreater,
  GET_CLUB_LOCATION_SAGA,
  getClubLocation,
  MOVE_STUDENT_SAGA,
  GET_STUDENT_SAGA,
  getStudent
} from "../../action/club";
import {
  methodType,
  requestAdminApiWithAccessToken,
  requestAdminGetApiWithAccessToken,
  requestDeleteApiWithAccessToken
} from "../../../lib/requestApi";

function* updateClubListSaga(action) {
  try {
    const res = yield requestAdminGetApiWithAccessToken(`/venus/clubs`, {
      "Cache-Control": "no-store"
    });
    yield put(updateClubList(res.data));
  } catch (err) {}
}

function* upadteClubDetailSaga(action) {
  try {
    const res = yield requestAdminGetApiWithAccessToken(
      `/venus/club/${action.payload}`
    );

    yield put(updateClubDetail(res.data));
  } catch (err) {}
}

function* changeClubDataSaga(action) {
  const [name, data] = action.payload;
  try {
    yield requestAdminApiWithAccessToken(
      methodType.PATCH,
      `/venus/club/${name}`,
      data
    );
    alert("성공했습니다");
    yield put(updateClubListSagaCreater());
  } catch (err) {}
}

function* addClubSaga(action) {
  const { clubData, member } = action.payload;
  try {
    yield requestAdminApiWithAccessToken(methodType.POST, "/venus/club", {
      students_num: member,
      club: clubData
    });

    yield put(updateClubListSagaCreater());
    alert("성공 했습니다");
  } catch (err) {
    alert("오류가 발생했습니다");
  }
}

function* deleteClubSaga(action) {
  try {
    for (let i = 0; i < action.payload.length; i++) {
      yield call(
        requestDeleteApiWithAccessToken,
        `/venus/club/${action.payload[i]}`
      );
    }
    alert("성공적으로 삭제했습니다");
    yield put(updateClubListSagaCreater());
  } catch (err) {
    alert("오류가 발생했습니다");
  }
}

function* getClubLocationSaga(action) {
  try {
    const res = yield call(
      requestAdminGetApiWithAccessToken,
      `/venus/locations/search?location=${action.payload}`
    );
    yield put(getClubLocation(res.data));
  } catch (err) {
    yield put(getClubLocation([]));
  }
}

function* moveClubSaga(action) {
  try {
    const { to, students } = action.payload;
    yield requestAdminApiWithAccessToken(
      methodType.PATCH,
      `/venus/club/students`,
      {
        students_num: students,
        to_club_name: to
      }
    );

    yield put(updateClubListSagaCreater());
    alert("성공 했습니다");
  } catch (err) {
    alert("오류가 발생했습니다");
  }
}

function* getStudentSaga(action) {
  try {
    const res = yield call(
      requestAdminGetApiWithAccessToken,
      `/venus/students/search?num_and_name=${action.payload}`
    );
    yield put(getStudent(res.data));
    console.log(res);
  } catch (err) {}
}

function* clubSaga() {
  yield takeEvery(UPDATE_CLUB_LIST_SAGA, updateClubListSaga);
  yield takeEvery(UPDATE_CLUB_DETAIL_SAGA, upadteClubDetailSaga);
  yield takeEvery(CHANGE_CLUB_DATA_SAGA, changeClubDataSaga);
  yield takeEvery(ADD_CLUB_SAGA, addClubSaga);
  yield takeEvery(DELETE_CLUB_SAGA, deleteClubSaga);
  yield takeEvery(GET_CLUB_LOCATION_SAGA, getClubLocationSaga);
  yield takeEvery(MOVE_STUDENT_SAGA, moveClubSaga);
  yield takeEvery(GET_STUDENT_SAGA, getStudentSaga);
}

export default clubSaga;
