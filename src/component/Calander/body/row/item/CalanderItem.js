import React from "react";
import * as S from "./styles";

const CalanderItem = ({ isActive, date, month }) => {
  return (
    <S.Container isActive={isActive}>
      <S.Header>{date}</S.Header>
      <S.Body>
        <S.TeacherName>오유신</S.TeacherName>
        <S.TeacherName>안현수</S.TeacherName>
        <S.TeacherName>김정은</S.TeacherName>
      </S.Body>
    </S.Container>
  );
};

export default CalanderItem;
