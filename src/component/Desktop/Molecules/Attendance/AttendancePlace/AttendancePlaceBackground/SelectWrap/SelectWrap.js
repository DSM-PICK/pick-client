import React from "react";
import * as S from "./styles";

const SelectWrap = props => {
  const { selectArr, currentArr } = props;
  const { onClick } = props;

  return (
    <S.Container>
      {selectArr.map((data, rowIndex) => (
        <S.Select key={data.header}>
          <S.SelectHeader>{data.header}</S.SelectHeader>
          <S.SelectBody>
            {data.bodyItem.map((item, colIndex) => (
              <S.SelectItem
                key={item}
                select={currentArr[rowIndex] === colIndex}
                onClick={() => onClick(rowIndex, colIndex)}
              >
                {item}
              </S.SelectItem>
            ))}
          </S.SelectBody>
        </S.Select>
      ))}
    </S.Container>
  );
};

export default SelectWrap;
