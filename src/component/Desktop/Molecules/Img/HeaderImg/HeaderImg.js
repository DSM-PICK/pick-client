import React from "react";
import { WhiteLogo } from "../../../../../asset";
import Img from "../../../Atoms/Img/Img";
import * as S from "./styles";

const HeaderImg = () => {
  const img = WhiteLogo;

  return (
    <S.Container>
      <Img src={img} width={"100px"} height={"22px"} />
    </S.Container>
  );
};

export default HeaderImg;
