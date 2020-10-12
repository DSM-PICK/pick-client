import { call, takeEvery } from "redux-saga/effects";
import { loginAction } from "../../action/login";
import { requestApi, methodType } from "../../../lib/requestApi";

function* requestLogin(action) {
  const { id, password } = action.payload;
  try {
    const res = yield call(requestApi, methodType.POST, `/saturn/auth/login`, {
      id,
      pw: password
    });

    const {
      data: { accessToken, refreshToken }
    } = res;

    window.localStorage.setItem("accessToken", accessToken);
    window.localStorage.setItem("refreshToken", refreshToken);
    alert("로그인에 성공했습니다.");
    window.location.href = "/main ";
  } catch (err) {
    console.log(err);
  }
}

function* loginSaga() {
  yield takeEvery(loginAction.REQUEST_LOGIN, requestLogin);
}

export default loginSaga;
