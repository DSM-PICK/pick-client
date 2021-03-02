import React from "react";
import * as S from "./style";

const DScheduleMiniCalanderItem = ({
  date,
  year,
  month,
  isThisMonth,
  isToday,
  onClick,
  isSelect
}) => {
  return (
    <S.Container
      isActive={!isThisMonth}
      isToday={isToday}
      isSelect={isSelect}
      onClick={() => onClick({ date, year, month })}
    >
      {date}
    </S.Container>
  );
};

export default DScheduleMiniCalanderItem;
