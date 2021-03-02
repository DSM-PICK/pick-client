import React, { useCallback, useEffect, useRef, useState } from "react";
import { getSchedule } from "../../../module/action/schedule";
import { useDispatch } from "react-redux";
import * as S from "../style";

const DScheduleHeader = () => {
  const dispatch = useDispatch();
  const dateObj = useRef();
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    dateObj.current = new Date();
    const year = dateObj.current.getFullYear();
    const month = dateObj.current.getMonth() + 1;

    setYear(year);
    setMonth(month);
  }, []);

  useEffect(() => {
    if (year === 0 || month === 0) return;

    dispatch(getSchedule({ year, month }));
  }, [year, month]);

  const nextMonth = useCallback(() => {
    const nowMonth = dateObj.current.getMonth();
    dateObj.current.setMonth(nowMonth + 1);

    const year = dateObj.current.getFullYear();
    const month = dateObj.current.getMonth() + 1;

    dispatch(getSchedule({ year, month }));
    setYear(year);
    setMonth(month);
  }, []);
  const prevMonth = useCallback(() => {
    const nowMonth = dateObj.current.getMonth();
    dateObj.current.setMonth(nowMonth - 1);

    const year = dateObj.current.getFullYear();
    const month = dateObj.current.getMonth() + 1;

    dispatch(getSchedule({ year, month }));
    setYear(year);
    setMonth(month);
  }, []);

  return (
    <S.Header>
      <S.ControlerWrap>
        <S.MoveMonth onClick={prevMonth}>
          <S.Triangle />
        </S.MoveMonth>
        <S.ShowDay>오늘</S.ShowDay>
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
