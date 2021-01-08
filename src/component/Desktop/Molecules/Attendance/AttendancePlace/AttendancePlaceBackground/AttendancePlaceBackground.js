import React from "react";
import * as S from "./styles";
import Button from "../../../../Atoms/Button/Button";

const AttendancePlaceBackground = () => {
  return (
    <S.Container>
      <S.BackgroundHeader></S.BackgroundHeader>
      <S.BackgroundButtonWrap>
        <Button
          text={"조회하기"}
          css={S.ButtonCSS}
          onClick={() => alert("wow!")}
        />
      </S.BackgroundButtonWrap>
    </S.Container>
  );
};

export default AttendancePlaceBackground;
