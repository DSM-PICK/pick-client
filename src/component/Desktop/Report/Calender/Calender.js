import React, { useEffect, useRef, useState } from "react";
import * as S from "../styles";
import DayOfWeeks from "./DayOfWeeks";
import Today from "./Today";
import MonthCalender from "./MonthCalender/MonthCalender";
import { getMonthLastDay } from "./calenderConstance";

const Calender = ({ selectedDate, setSelectedDate }) => {
  const CalenderWrapperRef = useRef();
  const [renderedMonth, setMonth] = useState([]);
  const getInitMonth = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    let currentMonth = { year, month };
    let initMonths = [
      getCurrentMonth(currentMonth.year, currentMonth.month),
      { ...currentMonth }
    ];
    for (let i = 0; i <= 4; i++) {
      currentMonth = getNextMonth(currentMonth.year, currentMonth.month);
      initMonths = [...initMonths, { ...currentMonth }];
    }
    return initMonths;
  };
  const initMonth = () => {
    setMonth(getInitMonth());
  };
  const getNextMonth = (nowYear, nowMonth) => {
    if (nowMonth === 12) {
      return { year: nowYear + 1, month: 1 };
    } else {
      return { year: nowYear, month: nowMonth + 1 };
    }
  };
  const getCurrentMonth = (nowYear, nowMonth) => {
    if (nowMonth === 1) {
      return { year: nowYear - 1, month: 12 };
    } else {
      return { year: nowYear, month: nowMonth - 1 };
    }
  };
  const scrollHandler = event => {
    const scrollTop = CalenderWrapperRef.current.scrollTop;
    const clientHeight = CalenderWrapperRef.current.clientHeight;
    const scrollHeight = CalenderWrapperRef.current.scrollHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      const lastMonth = renderedMonth[renderedMonth.length - 1];
      setMonth([
        ...renderedMonth,
        getNextMonth(lastMonth.year, lastMonth.month)
      ]);
    } else if (scrollTop <= 0) {
      const firstMonth = renderedMonth[0];
      setMonth([
        getCurrentMonth(firstMonth.year, firstMonth.month),
        ...renderedMonth
      ]);
      CalenderWrapperRef.current.scrollTo(0, 194);
    }
  };
  useEffect(() => {
    initMonth();
  }, []);
  return (
    <S.DesktopReportCalender>
      <Today />
      <DayOfWeeks />
      <S.CalenderWrapper ref={CalenderWrapperRef} onScroll={scrollHandler}>
        {renderedMonth.map(({ year, month }) => (
          <MonthCalender
            key={`${year}-${month}`}
            year={year}
            month={month}
            endDate={getMonthLastDay(year, month)}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </S.CalenderWrapper>
    </S.DesktopReportCalender>
  );
};

export default Calender;
