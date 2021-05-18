import React from "react";
import * as S from "./styles";

const HeaderDate = props => {
  const { month, day, dayOfWeek } = props;

  const dayOfWeek2DateText = dayOfWeek => {
    let dateText = "";
    try {
      const dayOfWeekTextArr = ["일", "월", "화", "수", "목", "금", "토"];
      dateText = dayOfWeekTextArr[dayOfWeek];
    } catch (error) {
      return "";
    }

    return dateText + "요일";
  };

  return (
    <S.Container>
      <S.Date>{`${month}월 ${day}일`}</S.Date>
      <S.DayOfWeek>{dayOfWeek2DateText(dayOfWeek)}</S.DayOfWeek>
    </S.Container>
  );
};

export default HeaderDate;
