import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  DAttendanceAction,
  DAttendanceActionCreater
} from "../../action/d_attendance";
import { ATTENDANCE } from "../../../lib/requestUrl";
import {
  methodType,
  requestApiWithAccessToken,
  requestGetApiWithAccessToken
} from "../../../lib/requestApi";

function* getSelectAttendanceArr(action) {
  try {
    const { schedule, floor, isCascade } = action.payload;
    const { SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA } = DAttendanceAction;
    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);

    const floorData = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    yield put({
      type: SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
      payload: { floorData, schedule, floor, isCascade }
    });
  } catch (error) {}
}

function* successGetSelectAttendanceArr(action) {
  const { floorData, schedule, floor, isCascade } = action.payload;
  const locationArr = floorData.data.locations;

  const {
    setSelectAttendanceArr,
    setAttendanceStdData
  } = DAttendanceActionCreater;

  const { GET_ATTENDANCE_STD_DATA_SAGA } = DAttendanceAction;

  yield put(setSelectAttendanceArr(locationArr));

  if (!locationArr.length) {
    yield put(setAttendanceStdData([]));
  }
  if (isCascade && locationArr.length) {
    yield put({
      type: GET_ATTENDANCE_STD_DATA_SAGA,
      payload: { schedule, floor, priority: locationArr[0].priority }
    });
  }
}

function* getAttendanceStdData(action) {
  try {
    const { schedule, floor, priority } = action.payload;

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_LIST_URL(
      schedule,
      floor,
      priority
    );

    const attendanceData = yield call(
      requestGetApiWithAccessToken,
      REQUEST_URL
    );

    const { SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA } = DAttendanceAction;
    yield put({
      type: SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
      payload: attendanceData.data
    });
  } catch (error) {}
}
function* successGetAttendanceStdData(action) {
  try {
    const { name, head, attendances, managerTeacher } = action.payload;

    const { setClassInfo, setAttendanceStdData } = DAttendanceActionCreater;

    const stdCount = attendances.length;
    const stdCountWithoutEmployment = attendances.filter(
      stdInfo => stdInfo.state.eight !== "취업"
    ).length;

    yield put(setAttendanceStdData(attendances));
    yield put(
      setClassInfo({
        name,
        head,
        stdCount,
        stdCountWithoutEmployment,
        managerTeacher
      })
    );
  } catch (error) {}
}

function* patchAttendanceStdData(action) {
  try {
    const { number, period, state } = action.payload;
    const REQUEST_URL = ATTENDANCE.CHANGE_ATTENDANCE_STATE_URL();

    const res = yield call(
      requestApiWithAccessToken,
      methodType.PATCH,
      REQUEST_URL,
      {
        number,
        period,
        state
      }
    );
  } catch (error) {}
}

function* patchAndGetStdData(action) {
  try {
    const { number, period, state, currentClassPriority } = action.payload;
    const REQUEST_URL = ATTENDANCE.CHANGE_ATTENDANCE_STATE_URL();

    const res = yield call(
      requestApiWithAccessToken,
      methodType.PATCH,
      REQUEST_URL,
      {
        number,
        period,
        state
      }
    );

    const { GET_ATTENDANCE_STD_DATA_SAGA } = DAttendanceAction;
    const { schedule, floor, priority } = currentClassPriority;

    yield put({
      type: GET_ATTENDANCE_STD_DATA_SAGA,
      payload: { schedule, floor, priority }
    });
  } catch (err) {}
}

function* getManagedAttendanceArr(action) {
  try {
    const { floor, schedule } = action.payload;

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const {
      setManagedClassFloorData,
      setManagedClubFloorData
    } = DAttendanceActionCreater;

    if (schedule === "club") {
      yield put(setManagedClubFloorData(res.data.locations));
    } else {
      yield put(setManagedClassFloorData(res.data.locations));
    }
  } catch (error) {}
}

function* getManagedClubAttendanceArr(action) {
  try {
    const { floor, schedule } = action.payload;

    const REQUEST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(schedule, floor);

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const {
      setManagedClassFloorData,
      setManagedClubFloorData
    } = DAttendanceActionCreater;

    if (schedule === "club") {
      yield put(setManagedClubFloorData(res.data.locations));
    } else {
      yield put(setManagedClassFloorData(res.data.locations));
    }
  } catch (error) {}
}

function* putAttendanceStdData(action) {
  try {
    const { numbers, periods, state, currentClassPriority } = action.payload;
    const REQUEST_URL = ATTENDANCE.CHANGE_ATTENDANCE_STATE_URL();

    const res = yield call(
      requestApiWithAccessToken,
      methodType.PUT,
      REQUEST_URL,
      {
        numbers: Array.isArray(numbers) ? numbers : [numbers],
        periods: Array.isArray(periods) ? periods : [periods],
        state
      }
    );

    const { GET_ATTENDANCE_STD_DATA_SAGA } = DAttendanceAction;
    const { schedule, floor, priority } = currentClassPriority;

    yield put({
      type: GET_ATTENDANCE_STD_DATA_SAGA,
      payload: { schedule, floor, priority }
    });
  } catch (err) {}
}

function* setFirstScheduleAttendanceArr() {
  try {
    const { SET_FIRST_SCHEDULE_ATTENDANCE_ARR } = DAttendanceAction;
    const REQUEST_URL_CLUB = ATTENDANCE.ATTENDANCE_NAVIGATION_URL("CLUB", 4);
    const REQUEST_URL_CLASS = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      "SELF_STUDY",
      4
    );

    const res_club = yield call(requestGetApiWithAccessToken, REQUEST_URL_CLUB);
    const res_class = yield call(
      requestGetApiWithAccessToken,
      REQUEST_URL_CLASS
    );

    yield put({
      type: SET_FIRST_SCHEDULE_ATTENDANCE_ARR,
      payload: {
        club: res_club.data.locations,
        class: res_class.data.locations
      }
    });
  } catch (err) {}
}

function* setAttendanceMemo(action) {
  try {
    const { memo, numbers, periods } = action.payload;

    const REQUEST_URL = ATTENDANCE.SET_ATTENCANE_MEMO();

    const res = yield call(
      requestApiWithAccessToken,
      methodType.PUT,
      REQUEST_URL,
      {
        memo,
        numbers: Array.isArray(numbers) ? numbers : [numbers],
        periods: Array.isArray(periods) ? periods : [periods]
      }
    );
  } catch (error) {}
}

function* getStudentByState(action) {
  try {
    const { schedule, studentState } = action.payload;
    const REQUEST_URL = ATTENDANCE.SEARCH_STUDENT_BY_STATE(
      schedule,
      studentState
    );

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);

    const { SET_FLOOR_CLASS_DATA } = DAttendanceAction;
    yield put({ type: SET_FLOOR_CLASS_DATA, payload: res.data });
  } catch (error) {}
}

function* getMemoFloorData() {
  try {
    const REQUEST_URL = ATTENDANCE.MEMO_FLOOR_DATA(4);

    const res = yield call(requestGetApiWithAccessToken, REQUEST_URL);
    const {
      fourFloorMemoKind,
      threeFloorMemoKind,
      twoFloorMemoKind
    } = res.data;

    const { setMemoFloorData } = DAttendanceActionCreater;

    yield put(
      setMemoFloorData([
        { floor: "4층", floorData: fourFloorMemoKind },
        { floor: "3층", floorData: threeFloorMemoKind },
        { floor: "2층", floorData: twoFloorMemoKind },
        { floor: "입력", floorData: [] }
      ])
    );
  } catch (error) {}
}

function* getFloorData(action) {
  try {
    const { todaySchedule } = action.payload;

    const selfStudyOrAfterSchoolArr = ["self-study", "after-school"];

    const SELF_STUDY_FORTH_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      !!~selfStudyOrAfterSchoolArr.findIndex(
        schedule => schedule === todaySchedule
      )
        ? todaySchedule
        : "self-study",
      4
    );
    const SELF_STUDY_THIRD_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      !!~selfStudyOrAfterSchoolArr.findIndex(
        schedule => schedule === todaySchedule
      )
        ? todaySchedule
        : "self-study",
      3
    );
    const SELF_STUDY_SECOND_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      !!~selfStudyOrAfterSchoolArr.findIndex(
        schedule => schedule === todaySchedule
      )
        ? todaySchedule
        : "self-study",
      2
    );
    const SELF_STUDY_FIRST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL(
      !!~selfStudyOrAfterSchoolArr.findIndex(
        schedule => schedule === todaySchedule
      )
        ? todaySchedule
        : "self-study",
      1
    );
    const CLUB_FORTH_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL("club", 4);
    const CLUB_THIRD_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL("club", 3);
    const CLUB_SECOND_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL("club", 2);
    const CLUB_FIRST_URL = ATTENDANCE.ATTENDANCE_NAVIGATION_URL("club", 1);

    const selfStudyForthRes = yield call(
      requestGetApiWithAccessToken,
      SELF_STUDY_FORTH_URL
    );
    const selfStudyThirdRes = yield call(
      requestGetApiWithAccessToken,
      SELF_STUDY_THIRD_URL
    );
    const selfStudySecondRes = yield call(
      requestGetApiWithAccessToken,
      SELF_STUDY_SECOND_URL
    );
    const selfStudyFirstRes = yield call(
      requestGetApiWithAccessToken,
      SELF_STUDY_FIRST_URL
    );
    const clubForthRes = yield call(
      requestGetApiWithAccessToken,
      CLUB_FORTH_URL
    );
    const clubThirdRes = yield call(
      requestGetApiWithAccessToken,
      CLUB_THIRD_URL
    );
    const clubSecondRes = yield call(
      requestGetApiWithAccessToken,
      CLUB_SECOND_URL
    );
    const clubFirstRes = yield call(
      requestGetApiWithAccessToken,
      CLUB_FIRST_URL
    );

    const { setFloorData } = DAttendanceActionCreater;

    yield put(
      setFloorData({
        class: [
          { locations: selfStudyForthRes.data.locations },
          { locations: selfStudyThirdRes.data.locations },
          { locations: selfStudySecondRes.data.locations },
          { locations: selfStudyFirstRes.data.locations }
        ],
        club: [
          { locations: clubForthRes.data.locations },
          { locations: clubThirdRes.data.locations },
          { locations: clubSecondRes.data.locations },
          { locations: clubFirstRes.data.locations }
        ]
      })
    );
  } catch (error) {}
}

function* dAttendanceSaga() {
  const {
    GET_ATTENDANCE_STD_DATA_SAGA,
    SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
    FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
    GET_SELECT_ATTENDANCE_ARR_SAGA,
    SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
    FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA,
    PATCH_ATTENDANCE_STD_DATA_SAGA,
    PATCH_AND_GET_STD_DATA_SAGA,
    GET_MANAGED_ATTENDANCE_ARR_SAGA,
    GET_MANAGED_CLUB_ATTENDANCE_ARR_SAGA,
    PUT_ATTENDANCE_STD_DATA_SAGA,
    SET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA,
    // SET_ATTENDANCE_MEMO_SAGA,
    GET_STUDENT_BY_STATE_SAGA,
    SET_ATTENDANCE_MEMO_SAGA,
    GET_MEMO_FLOOR_DATA_SAGA,
    GET_FLOOR_DATA_SAGA
  } = DAttendanceAction;

  yield takeLatest(GET_SELECT_ATTENDANCE_ARR_SAGA, getSelectAttendanceArr);
  yield takeLatest(
    SUCCESS_GET_SELECT_ATTENDANCE_ARR_SAGA,
    successGetSelectAttendanceArr
  );
  // yield takeLatest(
  //   FAILURE_GET_SELECT_ATTENDANCE_ARR_SAGA,
  //   failureGetSelectAttendanceArr
  // );

  yield takeLatest(GET_ATTENDANCE_STD_DATA_SAGA, getAttendanceStdData);
  yield takeLatest(
    SUCCESS_GET_ATTENDANCE_STD_DATA_SAGA,
    successGetAttendanceStdData
  );
  // yield takeLatest(
  //   FAILURE_GET_ATTENDANCE_STD_DATA_SAGA,
  //   failureGetAttendanceStdData
  // );

  yield takeLatest(PATCH_ATTENDANCE_STD_DATA_SAGA, patchAttendanceStdData);
  yield takeLatest(PATCH_AND_GET_STD_DATA_SAGA, patchAndGetStdData);
  yield takeLatest(GET_MANAGED_ATTENDANCE_ARR_SAGA, getManagedAttendanceArr);
  yield takeLatest(
    GET_MANAGED_CLUB_ATTENDANCE_ARR_SAGA,
    getManagedClubAttendanceArr
  );
  yield takeLatest(PUT_ATTENDANCE_STD_DATA_SAGA, putAttendanceStdData);
  yield takeLatest(
    SET_FIRST_SCHEDULE_ATTENDANCE_ARR_SAGA,
    setFirstScheduleAttendanceArr
  );
  yield takeLatest(SET_ATTENDANCE_MEMO_SAGA, setAttendanceMemo);
  yield takeLatest(GET_STUDENT_BY_STATE_SAGA, getStudentByState);
  yield takeLatest(GET_MEMO_FLOOR_DATA_SAGA, getMemoFloorData);
  yield takeLatest(GET_FLOOR_DATA_SAGA, getFloorData);
}

export default dAttendanceSaga;
