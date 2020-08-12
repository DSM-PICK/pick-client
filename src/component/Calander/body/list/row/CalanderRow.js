import React, { useEffect } from "react";
import * as S from "./styles";
import CalanderItem from "./item/CalanderItem";

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
    console.log("캘린더 로우 랜더링");
  });
  return (
    <S.Container>
      {date.map(({ date, isActive, month }) => (
        <CalanderItem
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
