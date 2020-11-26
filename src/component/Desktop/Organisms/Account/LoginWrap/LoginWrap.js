import React from "react";
import * as S from "./styles";
import LoginForm from "../../../Molecules/Form/LoginForm/LoginForm";
import Link from "../../../Atoms/Link/Link";

const LoginWrap = () => {
  return (
    <S.Container>
      <div>123</div>
      <LoginForm />
      <Link to={"/register"} text={"계정이 없으신가요?"} style={S.LinkStyle} />
    </S.Container>
  );
};

export default LoginWrap;
