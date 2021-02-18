import React, { useEffect, useRef, useState } from "react";
import * as S from "../styles";
import DayOfWeeks from "./DayOfWeeks";
import Today from "./Today";
import MonthCalender from "./MonthCalender/MonthCalender";
import { getMonthLastDay } from "./calenderConstance";
import { useDesktopReportState } from "../../../../lib/hooks/desktop/report";

const Calender = () => {
  const CalenderWrapperRef = useRef();
  const [renderedMonth, setMonth] = useState([]);
  const { state, setState } = useDesktopReportState();
  const { startDate, endDate, selectedStudent } = state;
  const { setStartDate, setEndDate } = setState;
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
  const isLastMonthOfYear = month => month === 12;
  const isFirstMonthOfYear = month => month === 1;
  const getNextMonth = (nowYear, nowMonth) => {
    if (isLastMonthOfYear(nowMonth)) {
      return { year: nowYear + 1, month: 1 };
    } else {
      return { year: nowYear, month: nowMonth + 1 };
    }
  };
  const getCurrentMonth = (nowYear, nowMonth) => {
    if (isFirstMonthOfYear(nowMonth)) {
      return { year: nowYear - 1, month: 12 };
    } else {
      return { year: nowYear, month: nowMonth - 1 };
    }
  };
  const scrollHandler = () => {
    const {
      scrollTop,
      clientHeight,
      scrollHeight
    } = CalenderWrapperRef.current;
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
      setTimeout(() => {
        CalenderWrapperRef.current.scrollTo(0, 194);
      });
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
            attendanceChangeStartDate={startDate}
            attendanceChangeEndDate={endDate}
            setAttendanceChangeStartDate={setStartDate}
            setAttendanceChangeEndDate={setEndDate}
            selectedStudent={selectedStudent}
          />
        ))}
      </S.CalenderWrapper>
    </S.DesktopReportCalender>
  );
};

export default Calender;
