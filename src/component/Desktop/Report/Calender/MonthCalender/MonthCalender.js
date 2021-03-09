import React from "react";
import * as S from "../../styles";
import { dayOfWeekEnum } from "../calenderConstance";
import MonthCalenderDate from "./MonthCalenderDate";

const week = 5;

const MonthCalender = ({
  endDate,
  month,
  year,
  attendanceChangeStartDate,
  attendanceChangeEndDate,
  setAttendanceChangeStartDate,
  setAttendanceChangeEndDate,
  selectedStudent
}) => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear();
  const getFirstDayOfMonth = (year, month) => {
    return new Date(`${year}-${month}-01`).getDay();
  };
  const getDate = dateCode => {
    if (dateCode === 0) {
      return 2;
    } else if (dateCode === 6) {
      return 3;
    } else {
      return 1;
    }
  };
  const renderMonth = (year, month) => {
    let firstDayOfMonth = getFirstDayOfMonth(year, month);
    let startDate = getDate(firstDayOfMonth);
    let renderArray = [
      renderWeek(year, month, startDate, endDate, firstDayOfMonth)
    ];
    startDate = startDate + 7 - dayOfWeekEnum[firstDayOfMonth];
    for (let i = startDate; i <= endDate; i = i + 7) {
      renderArray = [...renderArray, renderWeek(year, month, i, endDate)];
    }
    return renderArray;
  };
  const fillUpBlankDay = arrayLength => {
    let buffer = [];
    for (let i = 0; i < arrayLength; i++) {
      buffer = [
        ...buffer,
        <S.CalenderBlankDay key={`dummy-${Math.random()}`} />
      ];
    }
    return buffer;
  };
  const renderWeek = (year, month, startDate, endDate, startDayOfWeek = 1) => {
    const startBlankDayCount = dayOfWeekEnum[startDayOfWeek];
    const weekEndDate = startDate - startBlankDayCount + week;
    let renderArray = [...fillUpBlankDay(startBlankDayCount)];
    for (let i = startDate; i < weekEndDate && i <= endDate; i++) {
      renderArray = [
        ...renderArray,
        <MonthCalenderDate
          key={`day-${year}-${month}-${i}`}
          year={year}
          date={i}
          month={month}
          startDate={attendanceChangeStartDate}
          endDate={attendanceChangeEndDate}
          selectedStudent={selectedStudent}
          setAttendanceChangeDate={setAttendanceChangeDate}
          id={selectedStudent}
        />
      ];
    }
    const endBlankDayCount = 5 - fillUpBlankDay(renderArray.length).length;
    renderArray = [...renderArray, ...fillUpBlankDay(endBlankDayCount)];
    return (
      <S.CalenderDayWrapper key={`week-${year}-${month}-${startDate}`}>
        {renderArray}
      </S.CalenderDayWrapper>
    );
  };
  const setAttendanceChangeDate = (id, date) => {
    if (
      attendanceChangeStartDate.year === date.year &&
      attendanceChangeStartDate.month === date.month &&
      attendanceChangeStartDate.date === date.date
    ) {
      setAttendanceChangeEndDate({ date, id });
    } else if (
      attendanceChangeEndDate.year > date.year ||
      attendanceChangeEndDate.month > date.month ||
      attendanceChangeEndDate.date > date.date
    ) {
      setAttendanceChangeStartDate({ date, id });
    } else if (
      attendanceChangeEndDate.year === date.year &&
      attendanceChangeEndDate.month === date.month &&
      attendanceChangeEndDate.date === date.date
    ) {
      setAttendanceChangeStartDate({ date, id });
    } else {
      setAttendanceChangeEndDate({ date, id });
    }
  };
  const isTodayMonth = todayYear === year && todayMonth === month;
  return (
    <S.Calender>
      <S.CalenderMonth
        isTodayMonth={isTodayMonth}
        id={isTodayMonth ? "todayMonth" : ""}
      >
        {year}년 {month}월
      </S.CalenderMonth>
      {renderMonth(year, month)}
    </S.Calender>
  );
};

export default MonthCalender;
