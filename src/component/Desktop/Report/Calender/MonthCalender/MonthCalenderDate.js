import React, { useMemo } from "react";
import * as S from "../../styles";

const MonthCalender = ({
  date,
  month,
  year,
  startDate,
  endDate,
  selectedStudent,
  setAttendanceChangeDate
}) => {
  const { today, startDateObj, endDateObj } = useMemo(() => {
    const todayDateObj = new Date();
    const today = {
      year: todayDateObj.getFullYear(),
      month: todayDateObj.getMonth() + 1,
      date: todayDateObj.getDate()
    };
    const startDateObj = new Date(
      `${startDate.year}-${startDate.month}-${startDate.date}`
    );
    const endDateObj = new Date(
      `${endDate.year}-${endDate.month}-${endDate.date}`
    );
    return {
      today,
      startDateObj,
      endDateObj
    };
  });
  const buttonClickHandler = () => {
    setAttendanceChangeDate(selectedStudent, {
      year,
      month,
      date
    });
  };
  const isIncludeInAttendanceChangeDate = (startDateObj, endDateObj, date) => {
    const nowDateObj = new Date(`${date.year}-${date.month}-${date.date}`);
    return startDateObj <= nowDateObj && endDateObj >= nowDateObj;
  };
  return (
    <S.CalenderDay
      isToday={today.year == year && today.month == month && today.date == date}
      isClicked={isIncludeInAttendanceChangeDate(startDateObj, endDateObj, {
        year,
        month,
        date
      })}
      onClick={buttonClickHandler}
    >
      <p>{date}</p>
    </S.CalenderDay>
  );
};

export default MonthCalender;
