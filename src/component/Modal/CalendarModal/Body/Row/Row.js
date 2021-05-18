import React from "react";
import * as S from "./styles";
import Item from "./Item/Item";

const Row = props => {
  const { dateArr } = props;
  const { onSelectDay } = props;

  return (
    <S.Container>
      {dateArr.map(date => (
        <Item key={date.date} date={date} onSelectDay={onSelectDay} />
      ))}
    </S.Container>
  );
};

export default Row;
