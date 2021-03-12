import { call, put, takeLatest, debounce, select } from "redux-saga/effects";
import {
  setAttendanceChangeList,
  setSimilerStudents,
  setAttendanceChangeStudent,
  getAttendanceChangeList,
  GET_ATTENDANCE_CHANGE_LIST,
  ADD_ATTENDANCE_CHANGE_LIST,
  GET_SIMILER_STUDENT,
  DELETE_ATTENDANCE_CHANGE_STUDENT_TO_SERVER
} from "../../../action/deskop/report";
import {
  requestApiWithAccessToken,
  requestGetApiWithAccessToken,
  requestDelApiWithAccessToken
} from "../../../../lib/requestApi";
import { PRE_REPORT, AUTO_COMPLETE } from "../../../../lib/requestUrl";
import { makeDate2Digit } from "../../../../lib/attendanceApi";
import {
  deleteAttendanceChangeListErrorHandler,
  getAllAttendanceChangeListErrorHandler
} from "../../../../error/desktop/report";

const isAttendanceStudentDataAble = ({
  type,
  name,
  number,
  endDate,
  startDate,
  endPeriod,
  startPeriod
}) => {
  if (
    type.length <= 0 ||
    name.length <= 0 ||
    number.length <= 0 ||
    endPeriod.length <= 0 ||
    startPeriod.length <= 0 ||
    !type ||
    !name ||
    !number
  ) {
    return false;
  } else if (!startDate.year || !startDate.month || !startDate.date) {
    return false;
  } else if (!endDate.year || !endDate.month || !endDate.date) {
    return false;
  }
  return true;
};

const isAttendanceStudentListDataAble = studentList => {
  for (let i = 0; i < studentList.length; i++) {
    if (!isAttendanceStudentDataAble(studentList[i])) {
      return false;
    }
  }
  return true;
};

const getDateTextToObject = dateText => {
  const [year, month, date] = dateText.split("-");
  return {
    year: parseInt(year),
    month: parseInt(month),
    date: parseInt(date)
  };
};

const attendanceChangeListStateToDTO = state => {
  return state.map(
    ({
      type,
      description,
      name,
      number,
      endDate,
      startDate,
      endPeriod,
      startPeriod
    }) => ({
      stdnum: parseInt(number),
      name,
      start_date: `${startDate.year}-${makeDate2Digit(
        startDate.month
      )}-${makeDate2Digit(startDate.date)}`,
      start_period: startPeriod,
      end_date: `${endDate.year}-${makeDate2Digit(
        endDate.month
      )}-${makeDate2Digit(endDate.date)}`,
      end_period: endPeriod,
      state: type,
      memo: type === "이동" ? description : null,
      reason: type !== "이동" ? description : null
    })
  );
};

const attendanceChangeListDTOToState = response => {
  return response.map(
    ({
      id,
      teacher,
      stdnum,
      name,
      start_date,
      start_period,
      end_date,
      end_period,
      arrival_time,
      state,
      sub_state,
      memo
    }) => {
      return {
        type: state,
        description: memo,
        name: name,
        number: stdnum,
        id,
        startDate: getDateTextToObject(start_date),
        startPeriod: start_period,
        endDate: getDateTextToObject(end_date),
        endPeriod: end_period,
        teacher
      };
    }
  );
};

function* deleteAttendanceChangeStudent({ payload }) {
  try {
    const { attendanceChangeList } = yield select(state => state.desktopReport);
    const newState = attendanceChangeList.filter(
      attendanceChangeStudent => attendanceChangeStudent.id !== payload
    );
    const REQUEST_URL = PRE_REPORT.DELETE_PRE_REPORT_URL(payload);
    yield call(requestDelApiWithAccessToken, REQUEST_URL);
    yield put(setAttendanceChangeList(newState));
  } catch (error) {
    const errorHandler = deleteAttendanceChangeListErrorHandler(() =>
      requestDelApiWithAccessToken(REQUEST_URL)
    );
    errorHandler(error);
  }
}

function* getSimilerStudent({ payload }) {
  if (payload.length <= 0) {
    yield put(setSimilerStudents([]));
    return;
  }
  try {
    const REQUEST_URL = AUTO_COMPLETE.AUTO_COMPLETE_STUDENT_URL(payload);
    const { data } = yield call(requestGetApiWithAccessToken, REQUEST_URL);
    yield put(setSimilerStudents(data));
  } catch (error) {}
}

function* getAttendanceChangeListSaga() {
  try {
    const REQUEST_URL = PRE_REPORT.GET_ALL_PRE_REPORT_URL();
    const attendanceChangeList = yield call(
      requestGetApiWithAccessToken,
      REQUEST_URL
    );
    const newState = attendanceChangeListDTOToState(attendanceChangeList.data);
    yield put(setAttendanceChangeList(newState));
  } catch (error) {
    const errorHandler = getAllAttendanceChangeListErrorHandler(() =>
      requestGetApiWithAccessToken(REQUEST_URL)
    );
    errorHandler(error);
  }
}

function* addAttendanceChangeStudentSaga({ payload }) {
  if (!isAttendanceStudentListDataAble(payload)) {
    alert("입력 정보를 확인해 주세요.");
    return;
  }
  const requestList = attendanceChangeListStateToDTO(payload);
  try {
    const requestFunction = requestList.map(request =>
      requestApiWithAccessToken(
        request.isFix ? "put" : "post",
        request.isFix
          ? PRE_REPORT.PUT_PRE_REPORT_URL(request.id)
          : PRE_REPORT.CREATE_PRE_REPORT_URL(),
        request
      )
    );
    yield Promise.all(requestFunction);
    yield put(getAttendanceChangeList());
    yield put(setAttendanceChangeStudent([]));
  } catch (error) {}
}

function* desktopReportSaga() {
  yield takeLatest(GET_ATTENDANCE_CHANGE_LIST, getAttendanceChangeListSaga);
  yield takeLatest(ADD_ATTENDANCE_CHANGE_LIST, addAttendanceChangeStudentSaga);
  yield debounce(100, GET_SIMILER_STUDENT, getSimilerStudent);
  yield takeLatest(
    DELETE_ATTENDANCE_CHANGE_STUDENT_TO_SERVER,
    deleteAttendanceChangeStudent
  );
}

export default desktopReportSaga;
