import React from "react";
import ItemBtn from "./ItemBtn/ItemBtn";
import * as S from "./styles";

const AttendanceList = props => {
  const { stateList, css } = props;

  const stateListWithoutFalsy = Object.values(stateList).filter(data => data);

  return (
    <S.Container {...css}>
      {stateListWithoutFalsy.map((data, index) => (
        <ItemBtn key={index} text={data} />
      ))}
    </S.Container>
  );
};

export default AttendanceList;
