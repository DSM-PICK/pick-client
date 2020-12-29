import React from "react";
import * as S from "./styles";
import CalanderItemContainer from "./CalanderItem/CalanderItemContainer";

const CalanderRow = ({ dateArr }) => {
  const dateObj = new Date();
  const todayMonth = dateObj.getMonth() + 1;
  const todayDate = dateObj.getDate();

  return (
    <S.Container>
      {dateArr.map(
        ({ date, isActive, month, error, floor2, floor3, floor4 }) => (
          <CalanderItemContainer
            key={month + date}
            isActive={isActive}
            date={date}
            month={month}
            error={error}
            floor2={floor2}
            floor3={floor3}
            floor4={floor4}
            isToday={Number(month) === todayMonth && Number(date) === todayDate}
          />
        )
      )}
    </S.Container>
  );
};

export default CalanderRow;
