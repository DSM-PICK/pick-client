import React from "react";
import * as S from "./styles";
import CalanderItem from "./item/CalanderItem";

const CalanderRow = ({ date }) => {
  return (
    <S.Container>
      {date.map(({ date, isActive, month }) => (
        <CalanderItem isActive={isActive} date={date} />
      ))}
    </S.Container>
  );
};

export default CalanderRow;
