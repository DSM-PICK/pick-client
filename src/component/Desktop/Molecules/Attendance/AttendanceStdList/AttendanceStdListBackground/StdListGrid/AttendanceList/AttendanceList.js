import React, { useEffect } from "react";
import ItemBtn from "./ItemBtn/ItemBtn";
import * as S from "./styles";

const AttendanceList = props => {
  const { css, index, length, stateList, periodArr } = props;
  const { onStateChange } = props;

  return (
    <S.Container {...css} length={length}>
      {stateList.map((state, idx) => {
        return (
          <ItemBtn
            key={idx}
            index={index}
            propText={state}
            period={periodArr[idx]}
            onStateChange={onStateChange}
          />
        );
      })}
    </S.Container>
  );
};

export default AttendanceList;
