import React from "react";
import { DropDownArrow } from "../../../../../asset/Desktop";
import Img from "../../../Atoms/Img/Img";
import * as S from "./styles";

const HeaderUserWrap = props => {
  const { userName } = props;

  return (
    <S.Container>
      <S.UserName>{`${userName} 선생님`}</S.UserName>
      <Img src={DropDownArrow} css={S.ImgCSS} />
    </S.Container>
  );
};

export default HeaderUserWrap;
