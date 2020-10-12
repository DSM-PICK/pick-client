import React from "react";
import * as S from "./styles";

const Item = props => {
  const { isActive, date, month, year } = props;
  const { onSelectDay } = props;

  const now = new Date();

  const isToday =
    date === now.getDate() &&
    now.getMonth() + 1 === month &&
    now.getFullYear() === year
      ? true
      : false;

  isToday ? console.log(year, month, date) : "";

  return (
    <S.Container onClick={() => onSelectDay(date)}>
      <S.Date isActive={isActive} isToday={isToday}>
        {date}
      </S.Date>
    </S.Container>
  );
};

export default Item;
