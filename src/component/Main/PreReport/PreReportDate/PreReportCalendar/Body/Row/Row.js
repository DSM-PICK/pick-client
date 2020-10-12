import React from "react";
import * as S from "./styles";
import Item from "./Item/Item";

const Row = props => {
  const { dateArr, month, year } = props;
  const { onOffModal, onSelectDay } = props;

  return (
    <S.Container>
      {dateArr.map(({ date, isActive }) => (
        <Item
          key={date}
          isActive={isActive}
          date={date}
          month={month}
          year={year}
          onOffModal={onOffModal}
          onSelectDay={onSelectDay}
        />
      ))}
    </S.Container>
  );
};

export default Row;
