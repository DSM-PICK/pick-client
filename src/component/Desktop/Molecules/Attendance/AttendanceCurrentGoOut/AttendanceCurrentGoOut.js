import React from "react";
import Background from "../../../Atoms/Background/Background";
import Label from "../../../Atoms/Label/Label";
import AttendanceCurrentGoOutBackground from "./AttendanceCurrentGoOutBackground/AttendanceCurrentGoOutBackground";
import * as S from "./style";

const AttendanceCurrentGoOut = () => {
  return (
    <S.Container>
      <S.LableHeader>
        <Label text="외출 현황" css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}>
        <AttendanceCurrentGoOutBackground />
      </Background>
    </S.Container>
  );
};

export default AttendanceCurrentGoOut;
