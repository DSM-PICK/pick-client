import React, { useEffect } from "react";
import * as S from "./styles";
import LoginForm from "../../../Molecules/Form/LoginForm/LoginForm";
import CenterLink from "../../../Atoms/Link/CenterLink/CenterLink";
import Img from "../../../Atoms/Img/Img";
import { LogoPick } from "../../../../../asset";
import { useDispatch } from "react-redux";
import { setLoginError } from "../../../../../module/action/account";

const LoginWrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoginError(""));
  }, []);

  return (
    <S.Container>
      <S.ImgWrap>
        <Img img={LogoPick} style={S.ImgStyle} />
      </S.ImgWrap>
      <LoginForm />
      <CenterLink
        to={"/signup"}
        text={"계정이 없으신가요?"}
        style={S.LinkStyle}
      />
    </S.Container>
  );
};

export default LoginWrap;
