import React from "react";
import * as S from "../styles";

const DayOfWeeks = () => {
  return (
    <S.CalenderDayOfWeekWrapper>
      <S.CalenderDayOfWeek>월</S.CalenderDayOfWeek>
      <S.CalenderDayOfWeek>화</S.CalenderDayOfWeek>
      <S.CalenderDayOfWeek>수</S.CalenderDayOfWeek>
      <S.CalenderDayOfWeek>목</S.CalenderDayOfWeek>
      <S.CalenderDayOfWeek>금</S.CalenderDayOfWeek>
    </S.CalenderDayOfWeekWrapper>
  );
};

export default DayOfWeeks;
