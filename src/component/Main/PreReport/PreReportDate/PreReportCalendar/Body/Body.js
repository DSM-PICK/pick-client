import React from "react";
import * as S from "./styles";
import Row from "./Row/Row";

const Body = props => {
  const { calcDate, month, year } = props;
  const { onOffModal, onSelectDay } = props;

  calcDate.map(dateArr =>
    console.log(String(dateArr[0].month) + String(dateArr[0].date))
  );

  return (
    <S.Container>
      {calcDate.map(dateArr => (
        <Row
          key={String(dateArr[0].month) + String(dateArr[0].date)}
          dateArr={dateArr}
          month={month}
          year={year}
          onOffModal={onOffModal}
          onSelectDay={onSelectDay}
        />
      ))}
    </S.Container>
  );
};

export default Body;
