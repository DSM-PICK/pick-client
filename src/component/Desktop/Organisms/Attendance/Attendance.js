import React from "react";
import AttendanceCurrent from "../../Molecules/Attendance/AttendanceCurrent/AttendanceCurrent";
import AttendancePlace from "../../Molecules/Attendance/AttendancePlace/AttendancePlace";
import AttendanceStdList from "../../Molecules/Attendance/AttendanceStdList/AttendanceStdList";
import * as S from "./styles";

const Attendance = () => {
  return (
    <S.Container>
      <S.LeftGridWrap>
        <AttendancePlace />
        <AttendanceCurrent />
      </S.LeftGridWrap>
      <S.RightWrap>
        <AttendanceStdList />
      </S.RightWrap>
    </S.Container>
  );
};

export default Attendance;
