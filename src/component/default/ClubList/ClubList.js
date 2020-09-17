import React from "react";
import * as S from "./styles";

const sliceArray = (array, n) => {
  const newArray = [];
  const length = Math.floor(array.length / n);
  for (let i = 0; i <= length; i++) newArray.push(array.splice(0, n));

  return newArray;
};

const ClubList = ({ data, ItemComponent }) => {
  const sliceData = sliceArray(data, 4);
  return (
    <S.Container>
      {sliceData.map((data, index) => (
        <S.ClubRow key={index}>
          {data.map(({ name, where, id }, index) => (
            <ItemComponent key={index} name={name} where={where} id={id} />
          ))}
        </S.ClubRow>
      ))}
    </S.Container>
  );
};

export default ClubList;
