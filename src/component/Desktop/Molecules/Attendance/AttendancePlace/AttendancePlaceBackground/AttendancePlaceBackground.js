import React from "react";
import * as S from "./styles";
import Button from "../../../../Atoms/Button/Button";
import BackgroundHeader from "./BackgroundHeader/BackgroundHeader";
import DesktopSelectWrapContainer from "../../../../../../container/Desktop/Main/Attendance/DesktopSelectWrapContainer";

const AttendancePlaceBackground = props => {
  const { onClick } = props;

  return (
    <S.Container>
      <BackgroundHeader />
      <DesktopSelectWrapContainer />
      <S.BackgroundButtonWrap>
        <Button text={"조회하기"} css={S.ButtonCSS} onClick={onClick} />
      </S.BackgroundButtonWrap>
    </S.Container>
  );
};

export default AttendancePlaceBackground;
