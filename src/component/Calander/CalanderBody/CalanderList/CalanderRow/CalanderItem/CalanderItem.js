import React, { memo, useEffect } from "react";
import * as S from "./styles";

const CalanderItem = ({
  isToday,
  isActive,
  isActives,
  date,
  onClick,
  names,
  error
}) => {
  return (
    <S.Container isActive={isActive} onClick={onClick}>
      <S.Header active={isToday}>
        {isToday && <S.ActiveCircle />}
        <S.CircleP>{date}</S.CircleP>
      </S.Header>
      <S.Body>
        {error ? (
          <>
            <S.TeacherName>선생님</S.TeacherName>
            <S.TeacherName>정보가</S.TeacherName>
            <S.TeacherName>없어요</S.TeacherName>
          </>
        ) : (
          <>
            <S.TeacherName isActive={isActives[2]}>{names[2]}</S.TeacherName>
            <S.TeacherName isActive={isActives[1]}>{names[1]}</S.TeacherName>
            <S.TeacherName isActive={isActives[0]}>{names[0]}</S.TeacherName>
          </>
        )}
      </S.Body>
    </S.Container>
  );
};

export default memo(CalanderItem);
