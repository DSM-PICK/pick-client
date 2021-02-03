import React from "react";
import * as S from "../../styles";
import { dayOfWeekEnum } from "../calenderConstance";
import MonthCalenderDate from "./MonthCalenderDate";

const week = 5;

const MonthCalender = ({
  endDate,
  month,
  year,
  selectedDate,
  setSelectedDate
}) => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear();
  const getDay = (year, month) => {
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
  const renderMonth = (year, month, selectedDate, setSelectedDate) => {
    let startDay = getDay(year, month);
    let startDate = getDate(startDay);
    let renderArray = [
      renderWeek(
        year,
        month,
        today,
        selectedDate,
        setSelectedDate,
        startDate,
        endDate,
        startDay
      )
    ];
    startDate = startDate + 7 - dayOfWeekEnum[startDay];
    for (let i = startDate; i <= endDate; i = i + 7) {
      renderArray = [
        ...renderArray,
        renderWeek(
          year,
          month,
          today,
          selectedDate,
          setSelectedDate,
          i,
          endDate
        )
      ];
    }
    return renderArray;
  };
  const fillUpBlankDay = arrayLength => {
    let buffer = [];
    for (let i = 0; i < week - arrayLength; i++) {
      buffer = [...buffer, <S.CalenderBlankDay />];
    }
    return buffer;
  };
  const renderWeek = (
    year,
    month,
    today,
    selectedDate,
    setSelectedDate,
    startDate,
    endDate,
    startDayOfWeek = 1
  ) => {
    let renderArray = [...fillUpBlankDay(5 - dayOfWeekEnum[startDayOfWeek])];
    for (
      let i = startDate;
      i < startDate - dayOfWeekEnum[startDayOfWeek] + week && i <= endDate;
      i++
    ) {
      renderArray = [
        ...renderArray,
        <MonthCalenderDate
          key={`${year}-${month}-${i}`}
          year={year}
          date={i}
          month={month}
          today={today}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ];
    }
    const blankDays = fillUpBlankDay(renderArray.length);
    renderArray = [...renderArray, ...blankDays];

    return <S.CalenderDayWrapper>{renderArray}</S.CalenderDayWrapper>;
  };
  return (
    <S.Calender>
      <S.CalenderMonth
        isTodayMonth={todayYear === year && todayMonth === month}
      >
        {year}년 {month}월
      </S.CalenderMonth>
      {renderMonth(year, month, selectedDate, setSelectedDate)}
    </S.Calender>
  );
};

export default MonthCalender;
