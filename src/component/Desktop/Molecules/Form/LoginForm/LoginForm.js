import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "../../../Atoms/Input/Input";

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

  const InputStyle = {
    padding: "20px 40px",
    color: "#555555",
    fontSize: "18px",
    fontWeight: "500",
    borderRadius: "32px",
    background: "#efefef",
    boxShadow: "DownOn"
  };

  const SubmitStyle = {
    padding: "20px 40px",
    color: "#333333",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "32px",
    background: "linear-gradient(135deg, #e3e3e3, #fbfbfb)",
    boxShadow: "UpOn"
  };

  return (
    <S.Container onSubmit={onSubmit}>
      <Input
        name={"id"}
        type={"text"}
        style={InputStyle}
        value={loginInfo.id}
        placeholder={"아이디를 입력하세요"}
        onChange={onChangeLoginInfo}
      />
      <Input
        name={"password"}
        type={"password"}
        style={InputStyle}
        value={loginInfo.password}
        placeholder={"비밀번호를 입력하세요"}
        onChange={onChangeLoginInfo}
      />
      <div />
      <Input type={"submit"} style={SubmitStyle} value={"로그인"} />
    </S.Container>
  );
};

export default LoginForm;
