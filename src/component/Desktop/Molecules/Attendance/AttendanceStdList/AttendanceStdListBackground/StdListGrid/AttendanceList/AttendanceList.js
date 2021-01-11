import React, { useEffect } from "react";
import ItemBtn from "./ItemBtn/ItemBtn";
import * as S from "./styles";

const AttendanceList = props => {
  const { css, length, stateList, periodArr } = props;
  const { onStateChange } = props;

  return (
    <S.Container {...css} length={length}>
      {stateList.map((state, index) => {
        return (
          <ItemBtn
            key={index}
            propText={state}
            period={periodArr[index]}
            onStateChange={onStateChange}
          />
        );
      })}
    </S.Container>
  );
};

export default AttendanceList;
