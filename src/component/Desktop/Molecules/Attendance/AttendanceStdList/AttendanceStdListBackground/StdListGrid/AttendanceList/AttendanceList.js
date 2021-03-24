import React from "react";
import ItemBtn from "./ItemBtn/ItemBtn";
import * as S from "./styles";

const AttendanceList = props => {
  const { css, index, stList } = props;
  const { onStateChange } = props;

  const stdList = Object.values(stList).filter(state => state);
  const length = stdList.length;
  const periodArr = [10, 9, 8, 7].slice(0, stdList.length).reverse();

  return (
    <S.Container {...css} length={length}>
      {stdList.map((state, idx) => {
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

export default React.memo(AttendanceList);
