import React from "react";
import * as S from "./styles";
import LoginForm from "../../../Molecules/Form/LoginForm/LoginForm";
import Link from "../../../Atoms/Link/Link";
import Img from "../../../Atoms/Img/Img";
import { LogoPick } from "../../../../../asset";

const LoginWrap = () => {
  return (
    <S.Container>
      <Img img={LogoPick} style={S.ImgStyle} />
      <LoginForm />
      <Link to={"/signup"} text={"계정이 없으신가요?"} style={S.LinkStyle} />
    </S.Container>
  );
};

export default LoginWrap;
