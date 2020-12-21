import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import Input from "../../../Atoms/Input/Input";
import Label from "../../../Atoms/Label/Label";
import { useDispatch, useSelector } from "react-redux";
import { loginActionCreater } from "../../../../../module/action/login";
import { setLoginError } from "../../../../../module/action/account";

const LoginForm = () => {
  const loginError = useSelector(state => state.account.loginError);

  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: ""
  });
  const loginInfo2Korean = {
    id: "아이디",
    password: "비밀번호"
  };

  const dispatch = useDispatch();

  const setLoginFormError = useCallback(
    error => {
      dispatch(setLoginError(error));
    },
    [dispatch]
  );
  const requestLogin = useCallback(
    loginReqInfo => {
      dispatch(loginActionCreater.requestLogin(loginReqInfo));
    },
    [loginInfo]
  );

  const onChangeLoginInfo = useCallback(
    e => {
      const { name, value } = e.target;
      setLoginInfo(prev => ({
        ...prev,
        [name]: value
      }));
    },
    [loginInfo]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      for (let info in loginInfo) {
        if (loginInfo[info] === "") {
          setLoginFormError(`${loginInfo2Korean[info]} 칸이 비어있습니다`);
          return;
        }
      }

      requestLogin({
        id: loginInfo.id,
        password: loginInfo.password,
        device: "desktop"
      });
    },
    [loginInfo]
  );

  const LoginFormStaticData = [
    {
      TagName: Input,
      name: "id",
      type: "text",
      style: S.InputStyle,
      value: loginInfo.id,
      placeholder: "아이디를 입력하세요",
      onChange: onChangeLoginInfo
    },
    {
      TagName: Input,
      name: "password",
      type: "password",
      style: S.InputStyle,
      value: loginInfo.password,
      placeholder: "비밀번호를 입력하세요",
      onChange: onChangeLoginInfo
    },
    {
      TagName: Label,
      name: "errorLabel",
      style: S.LabelStyle,
      value: loginError
    },
    {
      TagName: Input,
      name: "submit",
      type: "submit",
      style: S.SubmitStyle,
      value: "로그인"
    }
  ];

  return (
    <S.Container onSubmit={onSubmit}>
      {LoginFormStaticData.map(
        ({ TagName, name, type, style, value, placeholder, onChange }) => (
          <TagName
            key={name}
            name={name}
            type={type}
            style={style}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
      )}
    </S.Container>
  );
};

export default LoginForm;
