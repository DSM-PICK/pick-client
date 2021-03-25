import React from "react";
import DesktopAttendanceClassInfoContainer from "../../../../container/Desktop/Temp/Attendance/DesktopAttendanceClassInfoContainer";
import DesktopAttendancePlaceContainer from "../../../../container/Desktop/Temp/Attendance/DesktopAttendancePlaceContainer";
import AttendanceCurrent from "../../Molecules/Attendance/AttendanceCurrent/AttendanceCurrent";
import AttendanceStdList from "../../Molecules/Temp/AttendanceStdList/AttendanceStdList";
import * as S from "./styles";

const Attendance = () => {
  return (
    <S.Container>
      <S.LeftGridWrap>
        <DesktopAttendancePlaceContainer />
        {/* <AttendanceCurrent /> */}
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
