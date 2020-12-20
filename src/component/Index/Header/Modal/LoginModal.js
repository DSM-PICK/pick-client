import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { loginActionCreater } from "../../../../module/action/login";
import PasswordEye from "../../../default/PasswordEye/PasswordEye";
import * as S from "./styles";

const LoginModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [typeIsPassword, setTypeIsPassword] = useState(true);
  const passwordRef = useRef();
  const modalRef = useRef();
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: ""
  });

  const changeLoginInfo = useCallback(e => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const changeTypeIsPassword = useCallback(() => {
    setTypeIsPassword(prev => !prev);
    passwordRef.current.focus();
  }, []);
  const requestLogin = useCallback(
    e => {
      e.preventDefault();
      dispatch(loginActionCreater.requestLogin(loginInfo));
    },
    [loginInfo]
  );
  const modalOff = useCallback(e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }, []);

  return (
    <S.Container onClick={modalOff}>
      <form onSubmit={requestLogin}>
        <S.Modal ref={modalRef}>
          <S.Header>
            <S.Title>로그인</S.Title>
            <S.Hr />
          </S.Header>
          <S.Body>
            <S.InputWrap>
              <S.Input
                name="id"
                onChange={changeLoginInfo}
                type="text"
                placeholder="이메일을 입력하세요"
                autoCapitalize="off"
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.Input
                name="password"
                onChange={changeLoginInfo}
                type={typeIsPassword ? "password" : "text"}
                placeholder="비밀번호를 입력하세요"
                ref={passwordRef}
              />
              <PasswordEye
                onClick={changeTypeIsPassword}
                showPassword={typeIsPassword}
              />
            </S.InputWrap>
            <S.LoginBtn>로그인</S.LoginBtn>
          </S.Body>
        </S.Modal>
      </form>
    </S.Container>
  );
};

export default LoginModal;
