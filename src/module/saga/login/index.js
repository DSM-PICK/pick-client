import { call, takeEvery } from "redux-saga/effects";
import { loginAction, loginConstant } from "../../action/login";
import { requestApi, methodType } from "../../../lib/requestApi";

function* requestLogin(action) {
  const { id, password } = action.payload;
  try {
    const res = yield call(requestApi, methodType.POST, `/saturn/auth/login`, {
      id,
      pw: password
    });

    const {
      data: { accessToken, refreshToken, teacherName }
    } = res;

    window.localStorage.setItem("accessToken", accessToken);
    window.localStorage.setItem("refreshToken", refreshToken);
    window.localStorage.setItem("teacherName", teacherName);
    alert("로그인에 성공했습니다.");
    window.location.href = "/main ";
  } catch (err) {
    switch (err.status) {
      case 404: {
        alert("아이디 또는 비밀번호가 잘못되었습니다!");
      }
    }
    console.log(err);
  }
}

function* loginSaga() {
  yield takeEvery(loginAction.REQUEST_LOGIN, requestLogin);
  yield takeEvery(loginAction.REQUEST_ADMIN_LOGIN_SAGA, requestAdminLoginSaga);
}

export default loginSaga;
