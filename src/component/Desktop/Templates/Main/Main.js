import React from "react";
import DesktopHeaderContainer from "../../../../container/Desktop/Header/DesktopHeaderContainer";
import Attendance from "../../Organisms/Attendance/Attendance";
import * as S from "./styles";

const Main = () => {
  return (
    <S.Container>
      <DesktopHeaderContainer />
      <S.AttendanceWrap>
        <S.AttendanceGridWrap>
          <Attendance />
        </S.AttendanceGridWrap>
      </S.AttendanceWrap>
    </S.Container>
  );
};

export default Main;
