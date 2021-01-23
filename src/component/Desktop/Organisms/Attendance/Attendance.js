import React from "react";
import DesktopAttendancePlaceContainer from "../../../../container/Desktop/Main/Attendance/DesktopAttendancePlaceContainer";
import AttendanceClassInfo from "../../Molecules/Attendance/AttendanceClassInfo/AttendanceClassInfo";
import AttendanceCurrent from "../../Molecules/Attendance/AttendanceCurrent/AttendanceCurrent";
import AttendanceStdList from "../../Molecules/Attendance/AttendanceStdList/AttendanceStdList";
import * as S from "./styles";

const Attendance = () => {
  return (
    <S.Container>
      <S.LeftGridWrap>
        <DesktopAttendancePlaceContainer />
        <AttendanceCurrent />
      </S.LeftGridWrap>
      <S.RightWrap>
        <AttendanceStdList />
      </S.RightWrap>
      <S.ClassInfoWrap>
        <AttendanceClassInfo />
      </S.ClassInfoWrap>
    </S.Container>
  );
};

export default Attendance;
