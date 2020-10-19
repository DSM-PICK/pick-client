import { call, put, takeEvery } from "redux-saga/effects";
import { getLocationState } from "../../../lib/attendanceApi";
import {
  methodType,
  requesetRefresh,
  requestApiWithAccessToken,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";
import { ATTENDANCE } from "../../../lib/requestUrl";
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
  setAttendanceStdData,
  GET_FLOOR_DATA_SAGA,
  SET_ATTENDANCE_STD_DATA,
  GET_ATTENDANCE_STD_DATA_SAGA,
  FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  POST_ATTENDANCE_STD_DATA_SAGA,
  FAILURE_POST_ATTENDANCE_STD_DATA_SAGA,
  setHead,
  setSchedule
} from "../../action/attendance";

function* getFloorData(payload) {
  try {
    const { locationState, text } = payload.payload;

    let floor = "";
    let setFloorData;
    let setFloorTeacherName;

    switch (text) {
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

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      locationState,
      floor
    );

    const selfStudyData = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const {
      date,
      schedule,
      dayOfWeek,
      locations,
      teacherName
    } = selfStudyData.data;

    yield put(setDate(date));
    yield put(setSchedule(schedule));
    yield put(setDayOfWeek(dayOfWeek));
    yield put(setFloorData(locations));
    yield put(setFloorTeacherName(teacherName));
  } catch (error) {
    console.log(error);
    // yield put(FAILURE_GET_SELF_STUDY_FLOOR_DATA_SAGA(error.response));

    switch (error.status) {
      case 403:
        requesetRefresh();
        console.log("requestRefresh");
    }
    console.log("자습 리스트 불러오기 실패");
  }
}

function* getAttendanceStdDataSaga(payload) {
  try {
    const { floor, priority } = payload.payload;
    const REQUEST_URL = ATTENDANCE.ATTENDANCE_LIST_URL(
      getLocationState(),
      floor,
      priority
    );

    const attendanceData = yield call(
      requestGetApiWithAccessToken,
      REQUEST_URL
    );

    const atdData = attendanceData.data.attendances;
    const clubHead = attendanceData.data.head;

    yield put(setHead(clubHead));
    yield put(setAttendanceStdData(atdData));
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

function* patchAttendanceStdData(payload) {
  try {
    const { number, period, state } = payload.payload;
    const REQUEST_URL = ATTENDANCE.CHANGE_ATTENDANCE_STATE_URL();

    yield call(requestApiWithAccessToken, methodType.PATCH, REQUEST_URL, {
      number,
      period,
      state
    });
  } catch (error) {
    // yield put(FAILURE_POST_ATTENDANCE_STD_DATA_SAGA(error.response));
    console.log(error);
    console.log("출석 데이터 저장 실패");
  }
}

function* attendanceSaga() {
  yield takeEvery(GET_FLOOR_DATA_SAGA, getFloorData);
  yield takeEvery(GET_ATTENDANCE_STD_DATA_SAGA, getAttendanceStdDataSaga);
  yield takeEvery(POST_ATTENDANCE_STD_DATA_SAGA, patchAttendanceStdData);
}

export default attendanceSaga;
