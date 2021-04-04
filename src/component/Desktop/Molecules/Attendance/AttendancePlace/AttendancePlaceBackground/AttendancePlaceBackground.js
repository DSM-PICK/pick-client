import React from "react";
import * as S from "./styles";
import DesktopSelectWrapContainer from "../../../../../../container/Desktop/Main/Attendance/DesktopSelectWrapContainer";
import DAPBackgroundHeaderContainer from "../../../../../../container/Desktop/Main/Attendance/DAPBackgroundHeaderContainer";

const AttendancePlaceBackground = props => {
  const { teacherName } = props;

  return (
    <S.Container>
      <DAPBackgroundHeaderContainer teacherName={teacherName} />
      <DesktopSelectWrapContainer />
    </S.Container>
  );
};

export default React.memo(AttendancePlaceBackground);
