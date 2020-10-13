import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  methodType,
  requesetRefresh,
  requestApiWithAccessToken,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";
import {
  setSelfStudyData,
  setSecondFloorData,
  setThirdFloorData,
  setForthFloorData,
  setSelfStudyTeacherName,
  setSecondTeacherName,
  setThirdTeacherName,
  setForthTeacherName,
  setDate,
  setDayOfWeek,
  GET_FLOOR_DATA_SAGA,
  SET_ATTENDANCE_STD_DATA,
  GET_ATTENDANCE_STD_DATA_SAGA,
  FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  POST_ATTENDANCE_STD_DATA_SAGA,
  FAILURE_POST_ATTENDANCE_STD_DATA_SAGA
} from "../../action/attendance";

function* getFloorData(payload) {
  try {
    let floor = "";
    let setFloorData;
    let setFloorTeacherName;
    switch (payload.payload) {
      case "4층":
        floor = 4;
        setFloorData = setForthFloorData;
        setFloorTeacherName = setForthTeacherName;
        break;
      case "3층":
        floor = 3;
        setFloorData = setThirdFloorData;
        setFloorTeacherName = setThirdTeacherName;
        break;
      case "2층":
        floor = 2;
        setFloorData = setSecondFloorData;
        setFloorTeacherName = setSecondTeacherName;
        break;
      case "자습실":
        floor = 1;
        setFloorData = setSelfStudyData;
        setFloorTeacherName = setSelfStudyTeacherName;
        break;
      default:
        throw new Error(
          `getSelfStudyFloorData : payload is not in "4층", "3층", "2층", "자습실"`
        );
    }
    const selfStudyData = yield call(
      requestGetApiWithAccessToken,
      `/saturn/attendance/navigation/${floor}`
    );
    console.log(`${payload.payload} 리스트 불러오기 성공`);

    console.log(selfStudyData);

    const { date, dayOfWeek, teacherName, locations } = selfStudyData.data;

    yield put(setDate(date));
    yield put(setDayOfWeek(dayOfWeek));
    yield put(setFloorTeacherName(teacherName));
    yield put(setFloorData(locations));

    console.log(`${payload.payload} 데이터 저장 성공`);
  } catch (error) {
    console.log(error);
    // yield put(FAILURE_GET_SELF_STUDY_FLOOR_DATA_SAGA(error.response));
    // console.log(error);
    switch (error.status) {
      case 403:
        requesetRefresh();
        console.log("requestRefresh");
    }
    console.log("자습 리스트 불러오기 실패");
  }
}

function* getAttendanceStdData(payload) {
  try {
    const { floor, priority } = payload.payload;

    console.log(payload, floor, priority);

    const attendanceData = yield call(
      requestGetApiWithAccessToken,
      `/saturn/attendance/student-state/${floor}/${priority}`
    );

    console.log(attendanceData);

    yield put(SET_ATTENDANCE_DATA(attendanceData));
    console.log(`출석 데이터 불러오기 성공`);
  } catch (error) {
    // yield put(FAILURE_GET_ATTENDANCE_STD_DATA_SAGA(error.response));
    console.log(error);
    console.log("출석 데이터 불러오기 실패");
    switch (error.status) {
      case 403:
        requesetRefresh();
    }
  }
}

function* postAttendanceStdData(payload) {
  try {
    const { number, period, state } = payload;
    yield call(
      methodType.POST,
      `attendance/student-state`,
      JSON.stringify({
        number,
        period,
        state
      })
    );

    console.log(`출석 데이터 저장 성공`);
  } catch (error) {
    // yield put(FAILURE_POST_ATTENDANCE_STD_DATA_SAGA(error.response));
    console.log(error);
    console.log("출석 데이터 저장 실패");
  }
}

function* attendanceSaga() {
  yield takeEvery(GET_FLOOR_DATA_SAGA, getFloorData);
  yield takeEvery(GET_ATTENDANCE_STD_DATA_SAGA, getAttendanceStdData);
  yield takeEvery(POST_ATTENDANCE_STD_DATA_SAGA, postAttendanceStdData);
}

export default attendanceSaga;
