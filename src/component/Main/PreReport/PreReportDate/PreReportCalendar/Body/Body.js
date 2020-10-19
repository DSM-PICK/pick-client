import React from "react";
import * as S from "./styles";
import Row from "./Row/Row";

const Body = props => {
  const { calcDate, year } = props;
  const { onOffModal, onSelectDay } = props;

  return (
    <S.Container>
      {calcDate.map(dateArr => (
        <Row
          key={String(dateArr[0].month) + String(dateArr[0].date)}
          dateArr={dateArr}
          year={year}
          onOffModal={onOffModal}
          onSelectDay={onSelectDay}
        />
      ))}
    </S.Container>
  );
};

export default Body;
