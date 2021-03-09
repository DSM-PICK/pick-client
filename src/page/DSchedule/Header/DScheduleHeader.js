import React, { useCallback, useEffect, useRef, useState } from "react";
import { getSchedule } from "../../../module/action/schedule";
import { useDispatch, useSelector } from "react-redux";
import * as S from "../style";

const DScheduleHeader = () => {
  const dispatch = useDispatch();
  const { year, month } = useSelector(store => store.schedule.date);
  const dateObj = useRef();

  useEffect(() => {
    dateObj.current = new Date();
    const year = dateObj.current.getFullYear();
    const month = dateObj.current.getMonth() + 1;

    dispatch(getSchedule({ year, month }));
  }, []);

  useEffect(() => {
    dateObj.current = new Date(year, month - 1);
  }, [year, month]);

  const gotoThisMonth = useCallback(() => {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;

    dispatch(getSchedule({ year, month }));
  }, []);

  const nextMonth = useCallback(() => {
    const nowMonth = dateObj.current.getMonth();
    dateObj.current.setMonth(nowMonth + 1);

    const year = dateObj.current.getFullYear();
    const month = dateObj.current.getMonth() + 1;

    dispatch(getSchedule({ year, month }));
  }, []);
  const prevMonth = useCallback(() => {
    const nowMonth = dateObj.current.getMonth();
    dateObj.current.setMonth(nowMonth - 1);

    const year = dateObj.current.getFullYear();
    const month = dateObj.current.getMonth() + 1;

    dispatch(getSchedule({ year, month }));
  }, []);

  return (
    <S.Header>
      <S.ControlerWrap>
        <S.MoveMonth onClick={prevMonth}>
          <S.Triangle />
        </S.MoveMonth>
        <S.ShowDay onClick={gotoThisMonth}>오늘로 돌아가기</S.ShowDay>
        <S.MoveMonth onClick={nextMonth}>
          <S.Triangle x={180} />
        </S.MoveMonth>
      </S.ControlerWrap>
      <S.ShowDate>
        {year}년 {month}월
      </S.ShowDate>
    </S.Header>
  );
};

export default DScheduleHeader;
