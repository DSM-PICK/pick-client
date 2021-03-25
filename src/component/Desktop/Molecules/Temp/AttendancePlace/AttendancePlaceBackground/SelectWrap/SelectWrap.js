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
            {data.bodyItem.length === 0 && (
              <S.SelectItem>데이터가 없습니다.</S.SelectItem>
            )}
            {data.bodyItem.map((item, colIndex) => (
              <S.SelectItem
                key={item}
                select={currentArr[rowIndex] === colIndex}
                onClick={() => onClick(rowIndex, colIndex)}
              >
                {item || "데이터가 없습니다."}
              </S.SelectItem>
            ))}
          </S.SelectBody>
        </S.Select>
      ))}
    </S.Container>
  );
};

export default React.memo(SelectWrap);
