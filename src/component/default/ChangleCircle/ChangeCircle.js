import React from "react";
import Circle from "./Circle/Circle";
import * as S from "./styles";
import { changeArrow } from "../../../asset";

const ChangeCircle = ({ step, circleData }) => {
  const { from, to } = circleData;
  return (
    <S.Container>
      <Circle circleName={from && from.name} />
      {step === 2 && <img src={changeArrow} />  }
      <Circle circleName={to && to.name} />
    </S.Container>
  );
};

export default ChangeCircle;
