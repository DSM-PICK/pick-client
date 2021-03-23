import React from "react";
import DesktopAttendanceClassInfoContainer from "../../../../container/Desktop/Main/Attendance/DesktopAttendanceClassInfoContainer";
import DesktopAttendancePlaceContainer from "../../../../container/Desktop/Main/Attendance/DesktopAttendancePlaceContainer";
import AttendanceStdList from "../../Molecules/Attendance/AttendanceStdList/AttendanceStdList";
import * as S from "./styles";

const Attendance = () => {
  return (
    <S.Container>
      <S.LeftGridWrap>
        <DesktopAttendancePlaceContainer />
      </S.LeftGridWrap>
      <S.RightWrap>
        <AttendanceStdList />
      </S.RightWrap>
      <S.ClassInfoWrap>
        <DesktopAttendanceClassInfoContainer />
      </S.ClassInfoWrap>
    </S.Container>
  );
};

export default React.memo(Attendance);
