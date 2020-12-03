import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "../../../../Atoms/Input/Input";

const SignupForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
    rePassword: ""
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

  return (
    <S.Container onSubmit={onSubmit}>
      <Input
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
      <Input type={"submit"} style={S.SubmitStyle} value={"회원가입"} />
    </S.Container>
  );
};

export default SignupForm;
