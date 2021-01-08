import React, { useCallback, useState } from "react";
import * as S from "./styles";

const SelectWrap = () => {
  const SelectArr = [
    {
      header: "학년",
      bodyItem: ["1학년", "2학년", "3학년", "기타"]
    },
    {
      header: "반",
      bodyItem: ["1반", "2반", "3반", "4반"]
    }
  ];

  const [currentArr, setCurrentArr] = useState(
    Array.from({ length: SelectArr.length }, () => 0)
  );

  const setCurrentArrByIndex = useCallback(
    (row, col) => {
      setCurrentArr(
        currentArr.map((current, index) => (index === row ? col : current))
      );
    },
    [currentArr]
  );

  return (
    <S.Container>
      {SelectArr.map((data, rowIndex) => (
        <S.Select key={data.header}>
          <S.SelectHeader>{data.header}</S.SelectHeader>
          <S.SelectBody>
            {data.bodyItem.map((item, colIndex) => (
              <S.SelectItem
                key={item}
                select={currentArr[rowIndex] === colIndex}
                onClick={() => setCurrentArrByIndex(rowIndex, colIndex)}
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
