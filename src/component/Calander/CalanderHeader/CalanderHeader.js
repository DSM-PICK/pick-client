import React from "react";
import * as S from "./styles";

const CalanderHeader = () => {
  return (
    <S.Container>
      <S.DayHeader>
        <div>월</div>
      </S.DayHeader>
      <S.DayHeader>
        <div>화</div>
      </S.DayHeader>
      <S.DayHeader>
        <div>수</div>
      </S.DayHeader>
      <S.DayHeader>
        <div>목</div>
      </S.DayHeader>
      <S.DayHeader>
        <div>금</div>
      </S.DayHeader>
    </S.Container>
  );
};

export default CalanderHeader;
