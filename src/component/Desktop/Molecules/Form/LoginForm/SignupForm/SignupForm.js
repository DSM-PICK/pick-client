import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "../../../../Atoms/Input/Input";
import Label from "../../../../Atoms/Label/Label";

const SignupForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
    checkPassword: ""
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

      console.log(loginInfo);
    },
    [loginInfo]
  );

  const SignupFormStaticData = [
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
      name: "checkPassword",
      type: "password",
      style: S.InputStyle,
      value: loginInfo.checkPassword,
      placeholder: "비밀번호를 다시 입력하세요",
      onChange: onChangeLoginInfo
    },
    {
      TagName: Label,
      name: "errorLabel",
      style: S.LabelStyle,
      value: "가입코드가 올바르지 않습니다"
    },
    {
      TagName: Input,
      name: "submit",
      type: "submit",
      style: S.SubmitStyle,
      value: "회원가입"
    }
  ];

  return (
    <S.Container onSubmit={onSubmit}>
      {SignupFormStaticData.map(
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
      {/* <Input
        name={"id"}
        type={"text"}
        style={S.InputStyle}
        value={loginInfo.id}
        placeholder={"아이디를 입력하세요"}
        onChange={onChangeLoginInfo}
      />
      <Input
        name={"password"}
        type={"password"}
        style={S.InputStyle}
        value={loginInfo.password}
        placeholder={"비밀번호를 입력하세요"}
        onChange={onChangeLoginInfo}
      />
      <Input
        name={"rePassword"}
        type={"password"}
        style={S.InputStyle}
        value={loginInfo.rePassword}
        placeholder={"비밀번호를 다시 입력하세요"}
        onChange={onChangeLoginInfo}
      />
      <div />
      <Input type={"submit"} style={S.SubmitStyle} value={"회원가입"} /> */}
    </S.Container>
  );
};

export default SignupForm;
