import React, { useCallback, useState } from "react";
import * as authApi from "../../lib/api/auth";
import { LogoPickSvg } from "../../asset";
import * as S from "./style";
import { useHistory } from "react-router-dom";

const errMsgMap = {
  400: "아이디 또는 비밀번호가 일치하지 않습니다"
};

const DLoginPage = () => {
  const history = useHistory();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [loginData, setLoginData] = useState({
    id: "",
    pw: ""
  });
  const [registerData, setRegisterData] = useState({
    id: "",
    password: "",
    name: ""
  });

  const loginInputHandler = useCallback(e => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  }, []);

  const registerInputHandler = useCallback(e => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  }, []);

  const loginHandler = useCallback(async () => {
    setErrMsg("");
    if (!isLoginMode) {
      setIsLoginMode(true);
      return;
    }
    if (!loginData.id) {
      setErrMsg("아이디를 입력해주세요.");
      return;
    }
    if (!loginData.pw) {
      setErrMsg("비밀번호를 입력해주세요.");
      return;
    }
    try {
      const res = await authApi.reqLogin(loginData);

      const { accessToken, refreshToken, teacherName } = res.data;
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", refreshToken);
      window.localStorage.setItem("teacherName", teacherName);

      history.push("/");
    } catch (errStatus) {
      setErrMsg(errMsgMap[errStatus]);
    }
  }, [isLoginMode, loginData]);
  const registerHandler = useCallback(async () => {
    setErrMsg("");
    if (isLoginMode) {
      setIsLoginMode(false);
      return;
    }
    if (!registerData.name) {
      setErrMsg("이름을 입력해주세요.");
      return;
    }
    if (!registerData.id) {
      setErrMsg("아이디를 입력해주세요.");
      return;
    }
    if (!registerData.password) {
      setErrMsg("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const res = await authApi.reqRegister(registerData);
    } catch (errStatus) {
      setErrMsg("글자수를 늘려주세요");
    }
  }, [isLoginMode, registerData]);
  return (
    <S.Container>
      <S.AuthWrap>
        <S.AuthHeader>
          <img src={LogoPickSvg} />
          <p>야간 자율학습 출석 관리 시스템</p>
        </S.AuthHeader>
        <S.AuthBody>
          <S.FormWrap>
            {isLoginMode ? (
              <>
                <S.AuthInput
                  autoComplete="off"
                  name="id"
                  onChange={loginInputHandler}
                  value={loginData.id}
                  type="text"
                  placeholder="아이디"
                />
                <S.AuthInput
                  autoComplete="off"
                  name="pw"
                  onChange={loginInputHandler}
                  value={loginData.pw}
                  type="password"
                  placeholder="비밀번호"
                />
                <S.HelpMessage>비밀번호를 잊으셨나요?</S.HelpMessage>
              </>
            ) : (
              <>
                <S.AuthInput
                  autoComplete="off"
                  onChange={registerInputHandler}
                  name="name"
                  value={registerData.name}
                  type="text"
                  placeholder="이름"
                />
                <S.AuthInput
                  autoComplete="off"
                  onChange={registerInputHandler}
                  name="id"
                  value={registerData.id}
                  type="text"
                  placeholder="아이디"
                />
                <S.AuthInput
                  autoComplete="off"
                  onChange={registerInputHandler}
                  name="password"
                  value={registerData.password}
                  type="password"
                  placeholder="비밀번호"
                />
              </>
            )}
          </S.FormWrap>
          <S.ErrWrap>
            {errMsg.length ? <S.ErrorMsg>{errMsg}</S.ErrorMsg> : ""}
          </S.ErrWrap>
          <S.ButtonWrap>
            <S.AuthButton onClick={loginHandler}>로그인</S.AuthButton>
            <S.AuthButton onClick={registerHandler}>회원가입</S.AuthButton>
          </S.ButtonWrap>
        </S.AuthBody>
      </S.AuthWrap>
    </S.Container>
  );
};

export default DLoginPage;
