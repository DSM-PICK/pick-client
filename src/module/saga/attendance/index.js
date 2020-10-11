import axios from "axios";
import { call, takeEvery } from "redux-saga/effects";
import {
  methodType,
  requestApiWithAccessToken,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";
import {
  GET_CLUB_FLOOR_DATA_SAGA,
  GET_SELF_STUDY_FLOOR_DATA_SAGA,
  FAILURE_GET_CLUB_FLOOR_DATA_SAGA,
  FAILURE_GET_SELF_STUDY_FLOOR_DATA_SAGA,
  SET_CLUB_FIRST_DATA,
  SET_CLUB_SECOND_DATA,
  SET_CLUB_THIRD_DATA,
  SET_CLUB_FORTH_DATA,
  SET_SELF_STUDY_SECOND_DATA,
  SET_SELF_STUDY_THIRD_DATA,
  SET_SELF_STUDY_FORTH_DATA,
  GET_ATTENDANCE_DATA_SAGA,
  SET_ATTENDANCE_DATA,
  FAILURE_GET_ATTENDANCE_DATA_SAGA,
  FAILURE_POST_ATTENDANCE_DATA_SAGA,
  POST_ATTENDANCE_DATA_SAGA
} from "../../action/attendance";

function* getClubFloorData() {
  try {
    const SET_CLUB_DATA_ACTIONS = [
      SET_CLUB_FIRST_DATA,
      SET_CLUB_SECOND_DATA,
      SET_CLUB_THIRD_DATA,
      SET_CLUB_FORTH_DATA
    ];
    for (let i = 1; i < 5; i++) {
      const clubData = yield call(
        requestGetApiWithAccessToken,
        `/saturn​/attendance​/club​/${i}`
      );
      yield put(SET_CLUB_DATA_ACTIONS[i - 1](clubData));
      console.log(`동아리/${i} 리스트 불러오기 성공`);
    }
    console.log(`전체 동아리 리스트 불러오기 성공`);
  } catch (error) {
    // yield put(FAILURE_GET_CLUB_FLOOR_DATA_SAGA(error.response));
    console.log(error);
    console.log("동아리 리스트 불러오기 실패");
  }
}

function* getSelfStudyFloorData() {
  try {
    const SET_SELF_STUDY_DATA_ACTIONS = [
      SET_SELF_STUDY_SECOND_DATA,
      SET_SELF_STUDY_THIRD_DATA,
      SET_SELF_STUDY_FORTH_DATA
    ];
    for (let i = 2; i < 5; i++) {
      const selfStudyData = yield call(
        requestGetApiWithAccessToken,
        `/saturn​/attendance​/self-study/${i}`
      );
      yield put(SET_SELF_STUDY_DATA_ACTIONS[i - 1](selfStudyData));
      console.log(`자습/${i} 리스트 불러오기 성공`);
    }
    console.log(`전체 자습 리스트 불러오기 성공`);
  } catch (error) {
    yield put(FAILURE_GET_SELF_STUDY_FLOOR_DATA_SAGA(error.response));
    console.log(error);
    console.log("자습 리스트 불러오기 실패");
  }
}

function* getAttendanceData(payload) {
  try {
    const { activity, floor, priority } = payload;
    const attendanceData = yield call(
      requestGetApiWithAccessToken,
      `/saturn​/${activity}/${floor}/${priority}`
    );
    yield put(SET_ATTENDANCE_DATA(attendanceData));
    console.log(`출석 데이터 불러오기 성공`);
  } catch (error) {
    yield put(FAILURE_GET_ATTENDANCE_DATA_SAGA(error.response));
    console.log(error);
    console.log("출석 데이터 불러오기 실패");
  }
}

function* postAttendanceData(payload) {
  try {
    const { floor, priority, number, period, state } = payload;
    yield call(
      requestApiWithAccessToken,
      methodType.POST,
      `saturn/attendance/${floor}/${priority}`,
      JSON.stringify({
        number,
        period,
        state
      })
    );

    console.log(`출석 데이터 저장 성공`);
  } catch (error) {
    yield put(FAILURE_POST_ATTENDANCE_DATA_SAGA(error.response));
    console.log(error);
    console.log("출석 데이터 저장 실패");
  }
}

function* attendanceSaga() {
  yield takeEvery(GET_CLUB_FLOOR_DATA_SAGA, getClubFloorData);
  yield takeEvery(GET_SELF_STUDY_FLOOR_DATA_SAGA, getSelfStudyFloorData);
  yield takeEvery(GET_ATTENDANCE_DATA_SAGA, getAttendanceData);
  yield takeEvery(POST_ATTENDANCE_DATA_SAGA, postAttendanceData);
}

export default attendanceSaga;
