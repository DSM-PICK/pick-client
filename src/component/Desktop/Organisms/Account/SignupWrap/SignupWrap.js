import React from "react";
import * as S from "./styles";
import Link from "../../../Atoms/Link/Link";
import Img from "../../../Atoms/Img/Img";
import SignupForm from "../../../Molecules/Form/LoginForm/SignupForm/SignupForm";
import { LogoPick } from "../../../../../asset";

const SignupWrap = () => {
  return (
    <S.Container>
      <Img img={LogoPick} style={S.ImgStyle} />
      <SignupForm />
      <Link to={"/login"} text={"이미 계정이 있습니다"} style={S.LinkStyle} />
    </S.Container>
  );
};

export default SignupWrap;
