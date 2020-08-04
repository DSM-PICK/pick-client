import React, { memo } from "react";
import { useSelector } from "react-redux";
import * as S from "./styles";

const ScheduleHeader = () => {
  const { year, month } = useSelector((state) => state.date);
  return (
    <S.Container>
      <S.LeftTextWrap>일정</S.LeftTextWrap>
      <S.MiddleWrap>
        <S.MiddleFirstText>{month}월</S.MiddleFirstText>
        <S.MiddleSecondText>{year}년</S.MiddleSecondText>
      </S.MiddleWrap>
      <S.Box width="50px" />
    </S.Container>
  );
};

export default memo(ScheduleHeader);
