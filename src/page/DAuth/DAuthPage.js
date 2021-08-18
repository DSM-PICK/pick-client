import React, { useCallback, useState } from "react";
import * as authApi from "../../lib/api/auth";
import { LogoPickSvg } from "../../asset";
import * as S from "./style";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DAttendanceActionCreater } from "../../module/action/d_attendance";
import { getManagedInfo } from "../../lib/attendanceApi";

const errMsgMap = {
  ALREADY_EXIST_ACCOUNT: "이미 존재하는 계정입니다",
  INVALID_REQUEST_BODY: "아이디, 비밀번호의 길이와 구성을 다양하게 해주세요",
  AUTHENTICATION_NUMBER_MISMATCH: "인증번호가 불일치 합니다",
  400: "아이디 또는 비밀번호가 일치하지 않습니다"
};

const DLoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [roomList, setRoomList] = useState([]);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [errMsg, setErrMsg] = useState("");
  const [loginData, setLoginData] = useState({
    id: "",
    pw: ""
  });
  const [registerData, setRegisterData] = useState({
    id: "",
    password: "",
    name: "",
    code: "",
    managedClassroomName: {}
  });

  const { setManagedInfo } = DAttendanceActionCreater;

  const dispatchManagedInfo = useCallback(
    (managedClassroom, managedClub) => {
      dispatch(setManagedInfo(getManagedInfo(managedClassroom, managedClub)));
    },
    [dispatch]
  );

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

        dispatchManagedInfo(managedClassroom, managedClub);

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
      if (!registerData.managedClassroomName) {
        setErrMsg("담당 교실을 입력해주세요.");
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
        const { code, id, name, password, managedClassroomName } = registerData;
        await authApi.reqCheckCode(code);
        const res = await authApi.reqRegister({
          id,
          name,
          password,
          managedClassroomFloor: managedClassroomName.floor,
          managedClassroomPriority: managedClassroomName.priority
        });
        setIsLoginMode(true);
        alert("회원가입을 성공했습니다");
      } catch (errResponse) {
        const code = errResponse.data.code;
        setErrMsg(errMsgMap[code] || "예상치 못한 오류입니다");
      }
    },
    [isLoginMode, registerData]
  );

  const getRoomList = useCallback(async e => {
    try {
      setClass(e.target.value);
      if (!e.target.value) {
        setRoomList([]);
        return;
      }
      const res = await authApi.getRoom(e.target.value);
      console.log(res.data);
      setRoomList(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const setClass = useCallback(className => {
    console.log(className);
    setRegisterData(prev => ({ ...prev, managedClassroomName: className }));
    setRoomList([]);
  }, []);

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
                <S.HelpMessage to="/password-change">
                  비밀번호를 잊으셨나요?
                </S.HelpMessage>
              </>
            ) : (
              <>
                <S.AuthInput
                  autoComplete="off"
                  onChange={registerInputHandler}
                  name="code"
                  value={registerData.code}
                  type="text"
                  placeholder="인증코드"
                />
                <S.AuthClass>
                  <S.AuthInput
                    autoComplete="off"
                    value={registerData.managedClassroomName.short_name}
                    onChange={getRoomList}
                    name="managedClassroomName"
                    placeholder="담당 교실"
                  />
                  {roomList.length ? (
                    <S.AuthClassList>
                      {roomList.map(now => (
                        <S.AuthClassItem
                          onClick={() => setClass(now)}
                          key={now.short_name}
                        >
                          {now.short_name}
                        </S.AuthClassItem>
                      ))}
                    </S.AuthClassList>
                  ) : (
                    ""
                  )}
                </S.AuthClass>
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
            {errMsg !== undefined ? <S.ErrorMsg>{errMsg}</S.ErrorMsg> : ""}
          </S.ErrWrap>
          <S.ButtonWrap>
            {isLoginMode ? (
              <>
                <S.BlueBtn type="button" onClick={loginHandler}>
                  로그인
                </S.BlueBtn>
                <S.WhiteBtn type="button" onClick={registerHandler}>
                  회원가입
                </S.WhiteBtn>
              </>
            ) : (
              <>
                <S.BlueBtn type="button" onClick={registerHandler}>
                  회원가입
                </S.BlueBtn>
                <S.WhiteBtn type="button" onClick={loginHandler}>
                  로그인
                </S.WhiteBtn>
              </>
            )}
            <S.HideBtn type="submit"></S.HideBtn>
          </S.ButtonWrap>
        </S.AuthBody>
      </S.AuthWrap>
    </S.Container>
  );
};

export default DLoginPage;
