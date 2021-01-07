import React from "react";
import * as S from "./styles";
import Label from "../../../Atoms/Label/Label";
import Background from "../../../Atoms/Background/Background";

const AttendancePlace = () => {
  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"출석 위치 선택"} css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}></Background>
    </S.Container>
  );
};

export default AttendancePlace;
