import { call, put, takeEvery } from "redux-saga/effects";
import { loginAction, loginConstant } from "../../action/login";
import {
  requestApi,
  methodType,
  requestAdminApiWithAccessToken
} from "../../../lib/requestApi";
import { GET_MAIN_TEXT_REMAINING_DATE_SAGA } from "../../action/main_text";

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
    put({ type: GET_MAIN_TEXT_REMAINING_DATE_SAGA });
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

function* requestAdminLoginSaga(action) {
  const { id, password } = action.payload;
  try {
    const res = yield call(
      requestAdminApiWithAccessToken,
      methodType.POST,
      `/venus/auth`,
      {
        id,
        pw: password
      }
    );

    const { access_token, refresh_token } = res.data;

    window.localStorage.setItem(loginConstant.ADMIN_ACCESS_TOKEN, access_token);
    window.localStorage.setItem(
      loginConstant.ADMIN_REFRESH_TOKEN,
      refresh_token
    );
    window.location.href = "/admin";
  } catch (err) {
    alert("아이디 또는 비밀번호가 맞지 않습니다");
  }
}

function* loginSaga() {
  yield takeEvery(loginAction.REQUEST_LOGIN, requestLogin);
  yield takeEvery(loginAction.REQUEST_ADMIN_LOGIN_SAGA, requestAdminLoginSaga);
}

export default loginSaga;
