import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../module/action/calander";
import * as S from "./styles";

const ScheduleHeader = () => {
  const { year, month } = useSelector(state => state.calander);
  const disaptch = useDispatch();

  const nextMonth = useCallback(() => {
    disaptch(
      setDate({
        year: month === 11 ? year + 1 : year,
        month: month === 11 ? 0 : month + 1
      })
    );
  }, [month]);

  const prevMonth = useCallback(() => {
    disaptch(
      setDate({
        year: month === 0 ? year - 1 : year,
        month: month === 0 ? 11 : month - 1
      })
    );
  }, [month]);

  return (
    <S.Container>
      <S.LeftTextWrap>일정</S.LeftTextWrap>
      <S.MiddleWrap>
        <button onClick={prevMonth}>&lt;</button>
        <div>
          <S.MiddleFirstText>{month + 1}월</S.MiddleFirstText>
          <S.MiddleSecondText>{year}년</S.MiddleSecondText>
        </div>
        <button onClick={nextMonth}>&gt;</button>
      </S.MiddleWrap>
      <S.Box width="80px" />
    </S.Container>
  );
};

export default memo(ScheduleHeader);
