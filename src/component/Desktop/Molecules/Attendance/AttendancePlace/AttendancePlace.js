import React, { useState } from "react";
import * as S from "./styles";
import Label from "../../../Atoms/Label/Label";
import Background from "../../../Atoms/Background/Background";
import Toggle from "./Toggle/Toggle";
import AttendancePlaceBackground from "./AttendancePlaceBackground/AttendancePlaceBackground";

const AttendancePlace = props => {
  const { selectSchedule } = props;
  const { setSelectSchedule } = props;

  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"출석 위치 선택"} css={S.LabelCSS} />
        <Toggle selectSchedule={selectSchedule} onClick={setSelectSchedule} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}>
        <AttendancePlaceBackground />
      </Background>
    </S.Container>
  );
};

export default AttendancePlace;
