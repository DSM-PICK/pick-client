import React from "react";
import * as S from "./styles";
import Label from "../../../Atoms/Label/Label";
import Background from "../../../Atoms/Background/Background";

const AttendanceStdList = () => {
  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"학생 목록"} css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}></Background>
    </S.Container>
  );
};

export default AttendanceStdList;
