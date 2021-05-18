import React from "react";
import Background from "../../../Atoms/Background/Background";
import Label from "../../../Atoms/Label/Label";
import AttendanceCurrentGoOutBackground from "./AttendanceCurrentGoOutBackground/AttendanceCurrentGoOutBackground";
import AttendanceCurrentGoOutRefresh from "./AttendanceCurrentGoOutRefresh/AttendanceCurrentGoOutRefresh";
import { RefreshBtn } from "../../../../../asset/Desktop/index";
import * as S from "./style";

const AttendanceCurrentGoOut = props => {
  const { onclickRefresh } = props;

  return (
    <S.Container>
      <S.LableHeader>
        <Label text="외출 현황" css={S.LabelCSS} />
        <AttendanceCurrentGoOutRefresh
          RefreshBtn={RefreshBtn}
          onclickRefresh={onclickRefresh}
        />
      </S.LableHeader>
      <Background css={S.BackgroundCSS}>
        <AttendanceCurrentGoOutBackground />
      </Background>
    </S.Container>
  );
};

export default AttendanceCurrentGoOut;
