import { call, put, takeEvery } from "redux-saga/effects";
import { loginAction, loginConstant } from "../../action/login";
import {
  requestApi,
  methodType,
  requestAdminApiWithAccessToken
} from "../../../lib/requestApi";
import { AUTH } from "../../../lib/requestUrl";
import {
  REQUEST_AUTHENTICATE_SAGA,
  REQUEST_SIGN_UP_SAGA,
  SET_AUTHENTICATE_ERROR,
  SET_IS_ACCOUNTED
} from "../../action/signup";

function* requestSignUp(action) {
  const { id, name, password, confirmPassword } = action.payload;
  try {
    const res = yield call(requestApi, methodType.POST, AUTH.SIGN_UP_URL(), {
      id: id,
      name: name,
      password: password,
      confirmPassword: confirmPassword
    });

    console.log(res);

    alert("회원가입에 성공했습니다.");
    window.location.href = "/login ";
  } catch (err) {
    switch (err) {
      case 400: {
        alert("아이디 또는 비밀번호의 형식이 잘못되었습니다.");
      }
    }
    console.log(err);
  }
}

function* requestAuthenticate(action) {
  const { authenticationNumber } = action.payload;
  try {
    console.log(AUTH.AUTHENTICATE_URL());
    const res = yield call(
      requestApi,
      methodType.POST,
      AUTH.AUTHENTICATE_URL(),
      {
        authenticationNumber: authenticationNumber
      }
    );

    yield put({ type: SET_AUTHENTICATE_ERROR, payload: "" });
    yield put({ type: SET_IS_ACCOUNTED, payload: true });

    console.log(res);
  } catch (err) {
    console.log(err);
    switch (err) {
      case 400: {
        yield put({
          type: SET_AUTHENTICATE_ERROR,
          payload: "가입코드가 잘못되었습니다."
        });
        yield put({
          type: SET_IS_ACCOUNTED,
          payload: false
        });
        alert("가입코드가 잘못되었습니다.");
      }
    }
  }
}

function* signupSaga() {
  yield takeEvery(REQUEST_SIGN_UP_SAGA, requestSignUp);
  yield takeEvery(REQUEST_AUTHENTICATE_SAGA, requestAuthenticate);
}

export default signupSaga;
