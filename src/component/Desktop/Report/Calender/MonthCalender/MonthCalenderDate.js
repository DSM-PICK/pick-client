import React from "react";
import * as S from "../../styles";

const MonthCalender = ({
  today,
  date,
  month,
  year,
  selectedDate,
  setSelectedDate
}) => {
  const buttonClickHandler = () => {
    setSelectedDate({
      year,
      month,
      date
    });
  };
  return (
    <S.CalenderDay
      isToday={
        today.getFullYear() === year &&
        today.getMonth() + 1 === month &&
        today.getDate() === date
      }
      isClicked={
        selectedDate.year === year &&
        selectedDate.month === month &&
        selectedDate.date === date
      }
      onClick={buttonClickHandler}
    >
      <p>{date}</p>
    </S.CalenderDay>
  );
};

export default MonthCalender;
