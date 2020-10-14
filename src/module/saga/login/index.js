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
    console.log(err);
  }
}

function* requestAdminLoginSaga(action) {
  const { id, password } = action.payload;
  try {
    const res = yield call(requestApi, methodType.POST, "/venus/auth", {
      pw: password,
      id
    });

    const { access_token, refresh_token } = res.data;

    window.localStorage.setItem(loginConstant.ADMIN_ACCESS_TOKEN, access_token);
    window.localStorage.setItem(
      loginConstant.ADMIN_REFRESH_TOKEN,
      refresh_token
    );
    window.location.href = "/admin";
  } catch (err) {
    alert("아이디 또는 비밀번호가 맞지 않습니다.");
  }
}

function* loginSaga() {
  yield takeEvery(loginAction.REQUEST_LOGIN, requestLogin);
  yield takeEvery(loginAction.REQUEST_ADMIN_LOGIN_SAGA, requestAdminLoginSaga);
}

export default loginSaga;
