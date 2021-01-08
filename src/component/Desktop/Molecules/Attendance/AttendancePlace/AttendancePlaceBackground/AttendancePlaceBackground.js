import React from "react";
import * as S from "./styles";
import Button from "../../../../Atoms/Button/Button";
import SelectWrap from "./SelectWrap/SelectWrap";
import BackgroundHeader from "./BackgroundHeader/BackgroundHeader";

const AttendancePlaceBackground = () => {
  return (
    <S.Container>
      <BackgroundHeader />
      <SelectWrap />
      <S.BackgroundButtonWrap>
        <Button
          text={"조회하기"}
          css={S.ButtonCSS}
          onClick={() => console.log("조회하기")}
        />
      </S.BackgroundButtonWrap>
    </S.Container>
  );
};

export default AttendancePlaceBackground;
