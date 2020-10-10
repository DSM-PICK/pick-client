import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { loginActionCreater } from "../../../../module/action/login";
import { Eye } from "../../../../asset";
import * as S from "./styles";

const LoginModal = () => {
  const dispatch = useDispatch();
  const [typeIsPassword, setTypeIsPassword] = useState(true);
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
  }, []);
  const requestLogin = useCallback(
    e => {
      e.preventDefault();
      dispatch(loginActionCreater.requestLogin(loginInfo));
    },
    [loginInfo]
  );
  return (
    <S.Container>
      <form onSubmit={requestLogin}>
        <S.Modal>
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
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.Input
                name="password"
                onChange={changeLoginInfo}
                type={typeIsPassword ? "password" : "text"}
                placeholder="비밀번호를 입력하세요"
              />
              <img src={Eye} onClick={changeTypeIsPassword} />
            </S.InputWrap>
            <S.LoginBtn>로그인</S.LoginBtn>
          </S.Body>
        </S.Modal>
      </form>
    </S.Container>
  );
};

export default LoginModal;
