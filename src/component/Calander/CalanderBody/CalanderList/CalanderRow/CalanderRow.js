import React, { useEffect } from "react";
import * as S from "./styles";
import CalanderItemContainer from "./CalanderItem/CalanderItemContainer";

const CalanderRow = ({ dateArr }) => {
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
          />
        )
      )}
    </S.Container>
  );
};

export default CalanderRow;
