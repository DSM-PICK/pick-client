import React from "react";
import * as S from "./styles";

const sliceArray = (array, n) => {
  const newArray = [...array];
  const splitArray = [];
  const length = Math.floor(array.length / n);
  for (let i = 0; i <= length; i++) splitArray.push(newArray.splice(0, n));

  return splitArray;
};

const ClubList = Component => props => {
  const slicedData = sliceArray(props.data, 4);
  return (
    <S.Container active={props.isDeleteOn}>
      <Component {...props} data={slicedData} />
    </S.Container>
  );
};

export default ClubList;
