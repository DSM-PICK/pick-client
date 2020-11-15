import React from "react";
import AttendanceFeat from "../../Organisms/Attendance/AttendanceFeat/AttendanceFeat";
import AttendanceStats from "../../Organisms/Attendance/AttendanceStats/AttendanceStats";
import Header from "../../Organisms/Header/Header";
import * as S from "./styles";

const Attendance = () => {
  return (
    <S.Container>
      <Header />
      <S.MainWrap>
        <AttendanceFeat />
        <AttendanceStats />
      </S.MainWrap>
    </S.Container>
  );
};

export default Attendance;
