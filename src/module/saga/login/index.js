import { call, takeEvery } from "redux-saga/effects";
import { loginAction } from "../../action/login";
import { requestApi, methodType } from "../../../lib/requestApi";

function* requestLogin(action) {
  const { id, password } = action.payload;
  try {
    const res = yield call(
      requestApi,
      methodType.POST,
      `/saturn/auth/access-refresh-token?id=${id}&pw=${password}`
    );
    const {
      data: { accessToken, refreshToken },
      status
    } = res;

    if (status === 200) {
      alert("로그인에 성공했습니다.");
      window.location.href = "/main ";
    }
    window.localStorage.getItem("accessToken", accessToken);
    window.localStorage.getItem("refreshToken", refreshToken);
  } catch (err) {
    console.log(err);
  }
}

function* successLogin() {}

function* loginSaga() {
  yield takeEvery(loginAction.REQUEST_LOGIN, requestLogin);
  yield takeEvery(loginAction.SUCCESS_LOGIN, successLogin);
}

export default loginSaga;
