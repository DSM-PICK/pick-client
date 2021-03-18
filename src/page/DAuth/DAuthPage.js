import React, { useCallback, useState } from "react";
import * as authApi from "../../lib/api/auth";
import { LogoPickSvg } from "../../asset";
import * as S from "./style";
import { useHistory } from "react-router-dom";

const errMsgMap = {
  ALREADY_EXIST_ACCOUNT: "이미 존재하는 계정입니다",
  INVALID_REQUEST_BODY: "아이디, 비밀번호의 길이와 구성을 다양하게 해주세요",
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

  const loginHandler = useCallback(
    async e => {
      setErrMsg("");
      if (!isLoginMode) {
        setIsLoginMode(true);
        e.preventDefault();
        return;
      }
      e.preventDefault();
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

        const {
          accessToken,
          refreshToken,
          teacherName,
          managedClassroom,
          managedClub
        } = res.data;

        window.localStorage.setItem("accessToken", accessToken);
        window.localStorage.setItem("refreshToken", refreshToken);
        window.localStorage.setItem("teacherName", teacherName);
        window.localStorage.setItem(
          "managedClassroom",
          JSON.stringify(managedClassroom)
        );
        window.localStorage.setItem("managedClub", JSON.stringify(managedClub));

        history.push("/");
      } catch (errStatus) {
        setErrMsg(errMsgMap[errStatus]);
      }
    },
    [isLoginMode, loginData]
  );
  const registerHandler = useCallback(
    async e => {
      setErrMsg("");
      if (isLoginMode) {
        setIsLoginMode(false);
        e.preventDefault();
        return;
      }
      e.preventDefault();
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
        history.push("/");
      } catch (errResponse) {
        const code = errResponse.data.code;
        setErrMsg(errMsgMap[code] || "예상치 못한 오류입니다");
      }
    },
    [isLoginMode, registerData]
  );
  return (
    <S.Container>
      <S.AuthWrap>
        <S.AuthHeader>
          <img src={LogoPickSvg} />
          <p>야간 자율학습 출석 관리 시스템</p>
        </S.AuthHeader>
        <S.AuthBody onSubmit={isLoginMode ? loginHandler : registerHandler}>
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
            <S.AuthButton type="button" onClick={loginHandler}>
              로그인
            </S.AuthButton>
            <S.AuthButton type="button" onClick={registerHandler}>
              회원가입
            </S.AuthButton>
            <S.HideBtn type="submit"></S.HideBtn>
          </S.ButtonWrap>
        </S.AuthBody>
      </S.AuthWrap>
    </S.Container>
  );
};

export default DLoginPage;
