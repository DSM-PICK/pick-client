import React from "react";
import DesktopStdListBodyContainer from "../../../../../../container/Desktop/Temp/Attendance/DesktopStdListBodyContainer";
import StdListHeader from "./StdListHeader/StdListHeader";
import * as S from "./styles";

const AttendanceStdListBackground = () => {
  return (
    <S.Container>
      <StdListHeader />
      <DesktopStdListBodyContainer />
    </S.Container>
  );
};

export default React.memo(AttendanceStdListBackground);
