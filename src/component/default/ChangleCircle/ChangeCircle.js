import React, { useCallback } from "react";
import Circle from "./Circle/Circle";
import * as S from "./styles";
import { moveStudentSaga } from "../../../module/action/club";
import { changeArrow, changeClub as changeClubLogo } from "../../../asset";

const ChangeCircle = ({ circleData, step, clickHandler }) => {
  const { from, to } = circleData;
  return (
    <S.Container>
      <Circle circleName={from} />
      {step === 2 && <img src={changeArrow} />}
      <Circle circleName={to} />
      {step === 2 && (
        <S.changeStudentBtn onClick={clickHandler}>
          <img src={changeClubLogo} />
          <div>이동</div>
        </S.changeStudentBtn>
      )}
    </S.Container>
  );
};

export default ChangeCircle;
