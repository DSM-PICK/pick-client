import React from "react";
import { useSelector } from "react-redux";
import * as S from "./styles";

const SStdListHeader = () => {
  const { statsAttendance } = useSelector(state => state.dStats);

  let length = 0;
  if (statsAttendance.length) {
    length = Object.values(statsAttendance[0].state).filter(data => data)
      .length;
  }

  const name = "학생";
  const attendanceList = ["10교시", "9교시", "8교시", "7교시"]
    .slice(0, length)
    .reverse();
  const memo = "비고";

  return (
    <S.Container>
      <S.ListHeader>
        <S.HeaderItem>{name}</S.HeaderItem>
        <S.HeaderList length={length}>
          {attendanceList.map(text => (
            <S.HeaderItem key={text}>{text}</S.HeaderItem>
          ))}
        </S.HeaderList>
        <S.HeaderItem>{memo}</S.HeaderItem>
      </S.ListHeader>
    </S.Container>
  );
};

export default SStdListHeader;
