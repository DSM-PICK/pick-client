import { call, takeEvery } from "redux-saga/effects";
import { loginAction } from "../../action/login";
import { requestApi, methodType } from "../../../lib/requestApi";

function* requestLogin(action) {
  const { id, password } = action.payload;
  try {
    // const res = yield call(
    //   requestApi,
    //   methodType.POST,
    //   `/saturn/auth/access-refresh-token`,
    //   {
    //     id,
    //     pw: password
    //   }
    // );
    //원래 코드 로그인 api가 수정 안되서 아래껄로 진행중

    const res = yield call(
      requestApi,
      methodType.POST,
      `/saturn/auth/access-refresh-token?id=${id}&pw=${password}`
    );
    // 수정되지 않은 api 삭제 예정

    const {
      data: { accessToken, refreshToken },
      status
    } = res;

    window.localStorage.setItem("accessToken", accessToken);
    window.localStorage.setItem("refreshToken", refreshToken);
    alert("로그인에 성공했습니다.");
    window.location.href = "/main ";
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
