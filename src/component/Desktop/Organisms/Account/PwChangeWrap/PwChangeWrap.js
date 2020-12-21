import React, { useEffect } from "react";
import * as S from "./styles";
import CenterLink from "../../../Atoms/Link/CenterLink/CenterLink";
import Img from "../../../Atoms/Img/Img";
import { LogoPick } from "../../../../../asset";
import { useDispatch } from "react-redux";
import { setPwChangeError } from "../../../../../module/action/account";
import PwChangeForm from "../../../Molecules/Form/LoginForm/PwChangeForm/PwChangeForm";

const PwChangeWrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPwChangeError(""));
  }, []);

  return (
    <S.Container>
      <S.ImgWrap>
        <Img img={LogoPick} style={S.ImgStyle} />
      </S.ImgWrap>
      <PwChangeForm />
      <CenterLink to={"/change"} text={"돌아가기"} style={S.LinkStyle} />
    </S.Container>
  );
};

export default PwChangeWrap;
