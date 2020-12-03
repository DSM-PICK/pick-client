import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "../../../Atoms/Input/Input";
import Label from "../../../Atoms/Label/Label";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: ""
  });

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

      console.log(loginInfo.id, loginInfo.password);
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
      style: S.LabelStyle,
      value: "가입코드가 올바르지 않습니다"
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
