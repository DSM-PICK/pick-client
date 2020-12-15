import React from "react";
import * as S from "./styles";

const HeaderDate = props => {
  const { month, day, dayOfWeek } = props;

  return (
    <S.Container>
      <S.Date>
        `${month}월 ${day}일`
      </S.Date>
      <S.DayOfWeek>{dayOfWeek}</S.DayOfWeek>
    </S.Container>
  );
};

export default HeaderDate;
