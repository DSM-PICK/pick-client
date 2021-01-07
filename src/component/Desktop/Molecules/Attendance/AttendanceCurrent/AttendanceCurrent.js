import React from "react";
import Background from "../../../Atoms/Background/Background";
import Label from "../../../Atoms/Label/Label";
import * as S from "./styles";

const AttendanceCurrent = () => {
  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"출석 현황"} css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}></Background>
    </S.Container>
  );
};

export default AttendanceCurrent;
