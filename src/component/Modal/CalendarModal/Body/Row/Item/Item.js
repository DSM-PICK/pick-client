import React from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";

const Item = props => {
  const { isActive, date, month, year } = props.date;

  const onSelectDay = useSelector(state => state.preReport.utils[0]);
  const isClickPreState = useSelector(state => state.preReport.isClickPreState);

  const now = new Date();

  const isToday =
    date === now.getDate() &&
    now.getMonth() + 1 === month &&
    now.getFullYear() === year
      ? true
      : false;

  return (
    <S.Container
      onClick={() => onSelectDay(year, month, date, isClickPreState)}
    >
      <S.Date isActive={isActive} isToday={isToday}>
        {date}
      </S.Date>
    </S.Container>
  );
};

export default Item;
