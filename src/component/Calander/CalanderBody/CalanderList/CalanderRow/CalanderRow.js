import React, { useEffect } from "react";
import * as S from "./styles";
import CalanderItemContainer from "./CalanderItem/CalanderItemContainer";

const teachers = [
  {
    name: "오유신",
    floor: 2,
  },
  {
    name: "안현수",
    floor: 3,
  },
  {
    name: "김정은",
    floor: 4,
  },
];

const CalanderRow = ({ date }) => {
  useEffect(() => {
    console.log("CalanderRow");
  });
  return (
    <S.Container>
      {date.map(({ date, isActive, month }) => (
        <CalanderItemContainer
          key={month + date}
          isActive={isActive}
          date={date}
          month={month}
          teachers={teachers}
        />
      ))}
    </S.Container>
  );
};

export default CalanderRow;
