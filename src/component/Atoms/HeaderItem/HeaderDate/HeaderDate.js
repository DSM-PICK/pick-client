import React from "react";
import * as S from "./styles";

const HeaderDate = props => {
  const { month, day, dayOfWeek } = props;

  const dayOfWeek2DateText = dayOfWeek => {
    let dateText = "";
    switch (dayOfWeek) {
      case 0:
        dateText += "일";
        break;
      case 1:
        dateText += "월";
        break;
      case 2:
        dateText += "화";
        break;
      case 3:
        dateText += "수";
        break;
      case 4:
        dateText += "목";
        break;
      case 5:
        dateText += "금";
        break;
      case 6:
        dateText += "토";
        break;
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
