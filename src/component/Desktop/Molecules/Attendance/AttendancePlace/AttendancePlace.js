import React, { useState } from "react";
import * as S from "./styles";
import Label from "../../../Atoms/Label/Label";
import Background from "../../../Atoms/Background/Background";
import Toggle from "./Toggle/Toggle";
import AttendancePlaceBackground from "./AttendancePlaceBackground/AttendancePlaceBackground";

const AttendancePlace = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <S.Container>
      <S.LableHeader>
        <Label text={"출석 위치 선택"} css={S.LabelCSS} />
        <Toggle toggle={toggle} onClick={() => setToggle(!toggle)} />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}>
        <AttendancePlaceBackground />
      </Background>
    </S.Container>
  );
};

export default AttendancePlace;
