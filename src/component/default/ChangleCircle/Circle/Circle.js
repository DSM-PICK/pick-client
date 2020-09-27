import React from "react";
import * as S from "./styles";

const Circle = ({ circleName }) => {
  return (
    <S.Container>
      <S.Title>소속 동아리</S.Title>
      <S.Sub>{circleName || "선택해주세요"}</S.Sub>
    </S.Container>
  );
};

export default Circle;
