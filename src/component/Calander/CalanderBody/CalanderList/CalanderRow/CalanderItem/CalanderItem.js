import React, { memo, useEffect } from "react";
import * as S from "./styles";

const CalanderItem = ({ isActive, isActives, date, onClick, names }) => {
  useEffect(() => {
    console.log("CalanderItem");
  });
  return (
    <S.Container isActive={isActive} onClick={onClick}>
      <S.Header>{date}</S.Header>
      <S.Body>
        <S.TeacherName isActive={isActives[0]}>{names[0]}</S.TeacherName>
        <S.TeacherName isActive={isActives[1]}>{names[1]}</S.TeacherName>
        <S.TeacherName isActive={isActives[2]}>{names[2]}</S.TeacherName>
      </S.Body>
    </S.Container>
  );
};

export default memo(CalanderItem);
