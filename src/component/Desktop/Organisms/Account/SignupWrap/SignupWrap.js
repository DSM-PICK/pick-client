import React from "react";
import * as S from "./styles";
import LoginForm from "../../../Molecules/Form/LoginForm/LoginForm";
import Link from "../../../Atoms/Link/Link";
import Img from "../../../Atoms/Img/Img";

const SignupWrap = () => {
  return (
    <S.Container>
      <Img style={S.ImgStyle} />
      <LoginForm />
      <Link
        to={"/register"}
        text={"이미 계정이 있습니다"}
        style={S.LinkStyle}
      />
    </S.Container>
  );
};

export default SignupWrap;
