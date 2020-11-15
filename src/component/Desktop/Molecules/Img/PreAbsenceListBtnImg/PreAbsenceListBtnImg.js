import React from "react";
import Img from "../../../Atoms/Img/Img";
import * as S from "./styles";

const PreAbsenceListBtnImg = props => {
  const { src, width, height } = props;

  return (
    <S.Container>
      <Img src={src} width={width} height={height} />
    </S.Container>
  );
};

export default PreAbsenceListBtnImg;
