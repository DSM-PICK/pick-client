import React from "react";
import * as S from "./styles";
import Label from "../../../Atoms/Label/Label";
import Background from "../../../Atoms/Background/Background";
import AttendanceStdListBackground from "./AttendanceStdListBackground/AttendanceStdListBackground";

const AttendanceStdList = () => {
  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"학생 목록"} css={S.LabelCSS} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}>
        <AttendanceStdListBackground />
      </Background>
    </S.Container>
  );
};

export default React.memo(AttendanceStdList);
