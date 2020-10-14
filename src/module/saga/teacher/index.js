import { call, put, takeEvery } from "redux-saga/effects";
import { teacherAction, teacherActionCreater } from "../../action/teacher";
import { requestGetApi } from "../../../lib/requestApi";

function fillZero(length) {
  const stringNumber = new String(this);
  const { length: nowLength } = stringNumber;

  let newStr = stringNumber;

  for (let i = nowLength; i < length; i++) {
    newStr = "0" + newStr;
  }

  return newStr;
}

Number.prototype.fillZero = fillZero;

function* getTeacherTodaySaga() {
  const nowDate = new Date();
  const year = nowDate.getFullYear().fillZero(2);
  const month = (nowDate.getMonth() + 1).fillZero(2);
  const date = nowDate.getDate().fillZero(2);

  try {
    const {
      data: { floor2, floor3, floor4 }
    } = yield call(
      requestGetApi,
      `/mars/activity/dates/${year}-${month}-${date}`
    );
    yield put(
      teacherActionCreater.getTeacherToday({
        floor2: floor2 + " 선생님",
        floor3: floor3 + " 선생님",
        floor4: floor4 + " 선생님"
      })
    );
  } catch (err) {
    yield put(
      teacherActionCreater.getTeacherToday({
        floor4: "없어요",
        floor3: "정보가",
        floor2: "선생님"
      })
    );
  }
}

function* getTeacherWeekSaga() {
  const now = new Date();
  now.setDate(now.getDate() - (now.getDay() - 1));

  const dateArr = [];
  for (let i = 1; i <= 5; i++) {
    now.setDate(now.getDate() + 1);
    try {
      const res = yield call(
        requestGetApi,
        `/mars/activity/dates/${now.getFullYear()}-${(
          now.getMonth() + 1
        ).fillZero(2)}-${now.getDate().fillZero(2)}`
      );
      dateArr.push(res.data);
    } catch (err) {
      dateArr.push({
        floor4: "선생님",
        floor3: "정보가",
        floor2: "없어요"
      });
    }
  }
  yield put(teacherActionCreater.getTeacherWeek(dateArr));
}

function* teacherSaga() {
  yield takeEvery(teacherAction.GET_TEACHER_TODAY_SAGA, getTeacherTodaySaga);
  yield takeEvery(teacherAction.GET_TEACHER_WEEK_SAGA, getTeacherWeekSaga);
}

export default teacherSaga;
