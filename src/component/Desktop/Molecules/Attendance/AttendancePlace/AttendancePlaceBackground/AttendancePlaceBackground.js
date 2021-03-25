import React from "react";
import * as S from "./styles";
import Button from "../../../../Atoms/Button/Button";
import DesktopSelectWrapContainer from "../../../../../../container/Desktop/Main/Attendance/DesktopSelectWrapContainer";
import DAPBackgroundHeaderContainer from "../../../../../../container/Desktop/Main/Attendance/DAPBackgroundHeaderContainer";

const AttendancePlaceBackground = props => {
  const { teacherName } = props;
  // const { onClick } = props;

  return (
    <S.Container>
      <DAPBackgroundHeaderContainer teacherName={teacherName} />
      <DesktopSelectWrapContainer />
      {/* <S.BackgroundButtonWrap>
        <Button text={"조회하기"} css={S.ButtonCSS} onClick={onClick} />
      </S.BackgroundButtonWrap> */}
    </S.Container>
  );
};

export default React.memo(AttendancePlaceBackground);
